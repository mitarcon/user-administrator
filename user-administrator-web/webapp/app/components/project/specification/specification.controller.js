(function() {
    'use strict';

    angular
        .module('mitchapp')
        .controller('SpecificationProjectController', Controller);

    Controller.$inject = [

    ];

    /* @ngInject */
    function Controller(

    ) {
        var vm = this;

        vm.save = save;

        //Variable validacion de curso
        vm.curso = {
          min: 1,
          max: 6,
          exclusive: true,
          exception: function (el) {
            return el === 3;
          }
        };

        activate();

        function activate () {
          console.log("Dentro de SpecificationProjectController");
        }

        function save (exampleForm) {
          console.log("guarde el formulario!!! ", exampleForm);
        }
    }
})();
