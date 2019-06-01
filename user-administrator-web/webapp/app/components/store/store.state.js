(function() {
    "use strict";
  
    angular.module("mitchapp").config(stateConfig);
  
    stateConfig.$inject = ["$stateProvider"];
  
    function stateConfig($stateProvider) {
      var state = {
        name: "system.store",
        url: "/store",
        views: {
          "allCol@": {
            templateUrl: "/webapp/app/components/store/store.html",
            controller: "StoreController",
            controllerAs: "vm"
          }
        }
      };
  
      $stateProvider.state(state);
    }
  })();
  