(function() {
    'use strict';

    angular
        .module('mitchapp')
        .config(stateConfig);

    stateConfig.$inject = [
        '$stateProvider'
    ];

    function stateConfig (
        $stateProvider
    ) {

        var state = {
            parent: 'app',
            name: 'admin',
            url: '/admin',
            templateUrl: '/webapp/app/components/admin/admin.html',
            controller: 'AdminController',
            controllerAs: 'vm'
        };

        $stateProvider.state(state);

    }

})();
