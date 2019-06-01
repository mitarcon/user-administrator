(function() {
    'use strict';

    angular
        .module('mitchapp')
        .factory('storageFactory', factory);

    factory.$inject = [
      '$localStorage'
    ];

    /* @ngInject */
    function factory(
      localStorage
    ) {

        var service = {
            getUser: getUser,
            setUser: setUser,
            getProject: getProject,
            setProject: setProject,
            reset: reset
        };

        return service;

        function reset () {
          localStorage.$reset();
        }

        function storage () {
          if (undefined === localStorage.mitchapp) {
            localStorage.mitchapp = {};
          }

          return localStorage.mitchapp;
        }

        function getUser () {
            return undefined === storage().user ? {} : angular.copy(storage().user);
        }

        function setUser (user) {
            storage().user = angular.copy(user);
        }

        function getProject () {
            return undefined === storage().project ? {} : angular.copy(storage().project);
        }

        function setProject (project) {
            storage().project = angular.copy(project);
        }

    }
})();
