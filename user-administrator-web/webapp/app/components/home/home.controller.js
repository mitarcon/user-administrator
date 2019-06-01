(function() {
    'use strict';

    angular
        .module('mitchapp')
        .controller('HomeController', Controller);

    Controller.$inject = [

    ];


    function Controller(

    ) {
        var vm = this;

        activate();

        function activate() {
            console.log("Activate en HomeController");
        }
    }
})();
