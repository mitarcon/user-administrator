(function() {
    'use strict';

    angular
        .module('mitchapp')
        .directive('valDinamicInterval', directive);

    /* @ngInject */
    function directive () {
        var directive = {
            require: 'ngModel',
            scope: {
              min: '=?valDiLimitMin',
              max: '=?valDiLimitMax',
              exclusive: '=?valDiLimitExclusive',
              exception: "=?valDiLimitExceptionFn",

            },
            link: linkFunc
        };

        return directive;

        function linkFunc (scope, el, attr, ngModel) {

          console.log("scope ",scope);
          console.log("ngModel ",ngModel);

          ngModel.$validators.errorMitchell = function errorMitchell (modelValue, viewValue){
            console.log("ejecute la validacion");
            var value = modelValue || viewValue;
            console.log("value es ",value);
            return value != 3;
          };
        }
    }

})();
