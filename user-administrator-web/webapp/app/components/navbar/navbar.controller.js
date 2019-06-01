(function() {
    'use strict';

    angular
        .module('mitchapp')
        .controller('NavbarProjectController', Controller);

    Controller.$inject = [

    ];

    /* @ngInject */
    function Controller(

    ) {
        var vm = this;

        activate();

        function activate() {
          console.log("En NavbarProjectController");
        }
    }
})();
