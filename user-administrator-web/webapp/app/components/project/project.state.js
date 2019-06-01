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
            name: 'project',
            url: '/project',
            abstract: true,
            views: {
              'navbar@': {
                templateUrl: '/webapp/app/components/project/navbar/navbar.html',
                controller: 'NavbarProjectController',
                controllerAs: 'vm'
              }
            }

        };

        $stateProvider.state(state);

    }

})();
