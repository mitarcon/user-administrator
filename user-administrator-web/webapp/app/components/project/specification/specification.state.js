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
            name: 'project.specification',
            url: '/specification',
            views: {
              'allCol@': {
                templateUrl: '/webapp/app/components/project/specification/specification.html',
                controller: 'SpecificationProjectController',
                controllerAs: 'vm'
              }
            }

        };

        $stateProvider.state(state);

    }

})();
