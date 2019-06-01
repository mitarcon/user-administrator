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
            name: 'system',
            url: '/system',
            abstract: true,
            views: {
              'navbar@': {
                templateUrl: '/webapp/app/components/navbar/navbar.html',
                controller: 'NavbarProjectController',
                controllerAs: 'vm'
              }
            }

        };

        $stateProvider.state(state);

    }

})();
