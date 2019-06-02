(function() {
  "use strict";

  angular.module("mitchapp").config(stateConfig);

  stateConfig.$inject = ["$stateProvider"];

  function stateConfig($stateProvider) {
    var state = {
      name: "system.client",
      url: "/client",
      views: {
        "allCol@": {
          templateUrl: "/webapp/app/components/client/client.html",
          controller: "ClientController",
          controllerAs: "vm"
        }
      }
    };

    $stateProvider.state(state);
  }
})();
