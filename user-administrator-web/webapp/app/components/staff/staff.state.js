(function() {
    "use strict";
  
    angular.module("mitchapp").config(stateConfig);
  
    stateConfig.$inject = ["$stateProvider"];
  
    function stateConfig($stateProvider) {
      var state = {
        name: "system.staff",
        url: "/staff",
        views: {
          "allCol@": {
            templateUrl: "/webapp/app/components/staff/staff.html",
            controller: "StaffController",
            controllerAs: "vm"
          }
        }
      };
  
      $stateProvider.state(state);
    }
  })();
  