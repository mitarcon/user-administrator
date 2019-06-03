(function () {
  "use strict";

  angular.module("mitchapp").controller("ClientController", Controller);

  Controller.$inject = ['ClientService', 'LocalizationService', 'StoreService', 'translateFilter',
    '$mdDialog'];

  /* @ngInject */
  function Controller(ClientService, LocalizationService, StoreService, translate, $mdDialog) {
    var vm = this;

    // Inicializar variables
    vm.searchParam = {
      localization: 0,
      store: 0,
      page: 0,
      size: 5
    }
    vm.sizePage = [3, 5, 10];
    vm.defaultOptionSelect = {
      name: translate('global.select'),
      id: 0
    }
    vm.localizations = [vm.defaultOptionSelect];
    vm.stores = [vm.defaultOptionSelect];
    vm.clients = [];

    vm.searchClients = searchClients;
    vm.downloadSearch = downloadSearch;
    vm.changeSize = changeSize;
    vm.changePage = changePage;
    vm.describeStatus = describeStatus;
    vm.changeClientStatus = changeClientStatus;
    vm.editClient = editClient;

    activate();

    function activate() {
      searchClients();
      searchLocalization();
      searchStores();
    }

    function searchLocalization() {
      LocalizationService.findAll()
        .then(function (response) {
          vm.localizations = response.data;
          vm.localizations.unshift(vm.defaultOptionSelect);
        }).catch(function (err) {
          console.log("error ", err)
        });
    }

    function searchStores() {
      StoreService.findAll()
        .then(function (response) {
          vm.stores = response.data;
          vm.stores.unshift(vm.defaultOptionSelect);
        }).catch(function (err) {
          console.log("error ", err)
        });
    }

    function searchClients() {
      var params = {
        store: vm.searchParam.store === 0 ? null : vm.searchParam.store,
        localization: vm.searchParam.localization === 0 ? null : vm.searchParam.localization,
        page: vm.searchParam.page,
        size: vm.searchParam.size
      }
      ClientService.findByFilterAndPage(params)
        .then(function (response) {
          vm.clients = response.data.content;
          vm.searchParam.totalElements = response.data.totalElements;
          vm.searchParam.totalPages = response.data.totalPages;
        }).catch(function (err) {
          console.log("error ", err)
        });
    }

    function changeSize(newSize) {
      vm.searchParam.size = newSize;
      searchClients();
    }

    function changePage(update) {
      vm.searchParam.page += update;
      searchClients();
    }

    function downloadSearch() {
      var params = {
        store: vm.searchParam.store === 0 ? null : vm.searchParam.store,
        localization: vm.searchParam.localization === 0 ? null : vm.searchParam.localization
      }
      ClientService.downloadPdf(params)
        .then(function (response) {
          var file = new Blob([response.data], { type: 'application/pdf' });
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        }).catch(function (err) {
          console.log("error ", err)
        });
    }

    function describeStatus(element) {
      var describe = '---';
      if (element.status === true) {
        describe = translate('clients.table.active');
      } else if (element.status === false) {
        describe = translate('clients.table.disabled');
      }

      return describe;
    }

    function changeClientStatus(client, event) {
      var confirm = $mdDialog.confirm()
        .title('Cambiar status de cliente')
        .textContent(translate('¿Está seguro que desea cambiar el status de ' + client.name + ' ?'))
        .targetEvent(event)
        .ok('Aceptar')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(function () {
        var data = { 'status': !client.status };
        ClientService.changeStatusClient(client.id, data)
          .then(function (response) {
            searchClients();
          })
          .catch(function () {
            console.log("No pudo editarse la persona")
          });
      });
    }

    function editClient() {

    }

  }
})();
