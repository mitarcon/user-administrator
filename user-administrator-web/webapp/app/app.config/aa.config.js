(function() {
    'use strict';

    angular
        .module('mitchapp')
        .run(config);

    config.$inject = [
        'aaFormExtensions'
    ];

    function config (
        aaFormExtensions
    ) {

        var defaultCol = 'md-3';

        // Ejemplo de implementacion de toda esta seccion
        // https://github.com/AngularAgility/AngularAgility/blob/master/src/formExtensions/provider.js
        // ejemplo de Estrategias
        // https://www.intertech.com/Blog/6-field-group-strategies-angular-agility/
        // ejemplos de validadores
        // https://www.algotech.solutions/blog/javascript/how-to-create-custom-validator-directives-with-angularjs/

        //Estrategias para el formato de label
        aaFormExtensions.labelStrategies.customStrategy = defaultLabelStrategy;
        aaFormExtensions.defaultLabelStrategy = 'customStrategy';

        //Estrategias para el formato de campo
        aaFormExtensions.fieldGroupStrategies.customStrategy = defaultFieldGroupStrategy;
        aaFormExtensions.defaultFieldGroupStrategy = 'customStrategy';

        //Mensajes
        aaFormExtensions.validationMessages = {
            required: "{0} es requerido.",
            email: "The field {0} must be an email.",
            minlength: "{0} must be at least {1} character(s).",
            maxlength: "{0} must be less than {1} characters.",
            min: "{0} must be at least {1}.",
            max: "{0} must be at most {1}.",
            pattern: "{0} is invalid.",
            url: "{0} must be a valid URL.",
            number: "{0} must be a number.",
            unknown: "{0} is invalid.",
            validationTitle: 'There are some validation errors',
            errorMitchell: "{0} tiene que ser {1} {2}"
        };

        // Estructura de mensajes de error
        aaFormExtensions.valMsgForTemplate = '<div class="mensajes-validar">' +
        '<div class="mensaje-validar" ng-show="showMessages" ng-repeat="msg in errorMessages">{{msg}}</div>' +
        '<div class="notch notch-border"></div>' +
        '<div class="notch"></div>' +
        '</div>';

        aaFormExtensions.fieldNameCustomizer = function(fieldName, $injector) {
          return fieldName+" Añadido";
        };



        function defaultLabelStrategy (
           element,
           labelText,
           isRequired,
           $injector
        ) {

           // console.log("+++++++++++++++++++++++++++++++++++++");
           // console.log("element ",element);
           // console.log("labelText ",labelText);
           // console.log("isRequired ", isRequired);
           // console.log("$injector ", $injector);

          var label = angular.element('<label>')
             .attr('for', element[0].id)
             .html(labelText);

          var unsupported = [
             'button',
             'submit'
          ];

          if (unsupported.indexOf(element[0].type) !== -1) {

              throw new Error("Generating a label for and input type " +
              element[0].type + " is unsupported.");

          }


          //No entiendo bien porque esta condición si $injector es un objeto de funciones
          if ($injector) {
             element.parent().parent().prepend(label);
          } else {
             element.parent().prepend(label);
          }

          // console.log("+++++++++++++++++++++++++++++++++++++");
        }

        function defaultFieldGroupStrategy (
            element,
            $injector
        ) {

            // console.log("----------------------------------------");
            // console.log("fieldGroupStrategy element ",element);
            // console.log("fieldGroupStrategy $injector ",$injector);

            // Con esto se define el tamaño de los campos, se construye usando bootstrap
            var col = findClosestEleWithAttr(element, 'aa-col') || defaultCol;

            if (!element.prop('class')) {
                element.addClass('form-control validation-control');
            }

            //Sino se agrega no reconoce el formulario, es necesario agregar el div interno porque sino da error cuando genera y no ve el formulario
            //Dentro de este div queda el input y lso mensajes de validacion
            wrap(element,
                '<div class="form-group aaFieldGroup col-' + col + '"><div></div></div>');

            // console.log("----------------------------------------");

        }

    //recurse up document tree starting with the current element to try to find
    //and element with a given attribute. if found return it.
    function findClosestEleWithAttr(ele, attr) {

      var attrVal;

      attrVal = ele.attr(attr);
      if(attrVal) {
        return attrVal;
      }

      var parent = ele.parent();

      if(!parent.length) {
        return;
      }

      attrVal = parent.attr(attr);
      if(attrVal) {
        return attrVal;
      }

      return findClosestEleWithAttr(parent, attr);
    }

    function wrap(elms, wrapper) {
      var wrapperDiv = document.createElement('div');
      wrapperDiv.innerHTML = wrapper;

      if (!elms.length) {
        elms = [elms];
      }

      for (var i = elms.length - 1; i >= 0; i--) {
        var el = elms[i];

        var child = wrapperDiv.firstChild.cloneNode(true);
        var appendNode = child;
        while (appendNode.firstChild) {
          appendNode = appendNode.firstChild;
        }

        var parent = el.parentNode;
        var sibling = el.nextSibling;

        appendNode.appendChild(el);

        if (sibling) {
          parent.insertBefore(child, sibling);
        } else {
          parent.appendChild(child);
        }
      }
    }

    }


})();
