(function() {
  "use strict";

  angular.module("mitchapp").controller("ClientController", Controller);

  Controller.$inject = [];

  /* @ngInject */
  function Controller() {
    var vm = this;

    activate();

    function activate() {
      console.log("Dentro de ClientController");
    }
  }
})();
