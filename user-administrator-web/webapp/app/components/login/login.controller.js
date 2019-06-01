(function() {
    'use strict';

    angular
        .module('mitchapp')
        .controller('LoginController', LoginController);

    LoginController.$inject = [
      '$state',
      'storageFactory'
    ];

    /* @ngInject */
    function LoginController(
      $state,
      storage
    ) {

      var vm = this;
      vm.login = login;
      vm.user = {
        rol: 'admin'
      };
      vm.error = {
        show: false,
        msj: ''
      };

      activate();
      function activate () {
        console.log("ente en LoginController");
      }

      function login () {
        console.log("el usuario a logearse es ", vm.user);
        $state.go('system.client');
      }
    }
})();
