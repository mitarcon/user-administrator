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
            name: 'home',
            url: '/home',
            abstract: true,
            views: {
              "allView@":{
                templateUrl: '/webapp/app/components/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
              }
            }

        };

        $stateProvider.state(state);

    }

})();
