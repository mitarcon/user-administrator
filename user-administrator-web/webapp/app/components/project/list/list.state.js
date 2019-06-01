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
            // parent: 'project',
            name: 'project.list',
            url: '/list',
            views: {
              'allCol@': {
                templateUrl: '/webapp/app/components/project/list/list.html',
                controller: 'ListProjectController',
                controllerAs: 'vm'
              }
            }

        };

        $stateProvider.state(state);

    }

})();
