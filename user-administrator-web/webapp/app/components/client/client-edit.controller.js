(function () {
	'use strict';

	angular
		.module('mitchapp')
		.controller('ClientEditController', Controller);

	Controller.$inject = ['client', 'localizations', 'stores', 'defaultOptionSelect',
		'ClientService', '$mdDialog'];

	/* @ngInject */
	function Controller(client, localizations, stores, defaultOptionSelect, ClientService,
		$mdDialog) {
		var vm = this;
		vm.client = client;
		vm.localizations = localizations;
		vm.stores = stores;

		vm.closeModal = closeModal;
		vm.save = save;

		activate();

		function activate() {
			vm.client.localization = vm.client.localization ? vm.client.localization : angular.copy(defaultOptionSelect);
			vm.client.store = vm.client.store ? vm.client.store : angular.copy(defaultOptionSelect);
			vm.isCreate = vm.client.id ? false : true;
		}

		function closeModal() {
			$mdDialog.hide();
		}

		function save() {
			if (vm.isCreate) {
				createClient();
			} else {
				updateClient();
			}
		}

		function createClient() {
			ClientService.createClient(vm.client)
				.then(function (result) {
					$mdDialog.hide('search');
				})
				.catch(function (err) {

				});
		}

		function updateClient() {
			ClientService.updateClient(vm.client.id, vm.client)
				.then(function (result) {
					$mdDialog.hide('search');
				})
				.catch(function (err) {

				});
		}
	}
})();
