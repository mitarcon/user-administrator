(function() {
    'use strict';

    angular
        .module('mitchapp')
        .controller('ProjectController', Controller);

    Controller.$inject = [

    ];

    /* @ngInject */
    function Controller(

    ) {
        var vm = this;

        activate();

        function activate() {
            console.log("dentro de ProjectController");
        }
    }
})();
