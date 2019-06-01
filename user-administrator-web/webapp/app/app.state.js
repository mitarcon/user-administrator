(function() {
    'use strict';

    angular
        .module('mitchapp')
        .config(stateConfig);

    stateConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
      ];

    function stateConfig (
        $stateProvider,
        $urlRouterProvider
    ) {


        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/home/login");
        $urlRouterProvider.when("", "/home/login");
        $urlRouterProvider.when("/", "/home/login");

        // var app = {
        //   name: 'app',
        //   url: '/',
        //   template: `
        //     <div class="container">
        //       <div ui-view="navbar"></div>
        //       <div class="row">
        //         <div ui-view="firstPart"></div>
        //         <div ui-view="SecondPart"></div>
        //       </div>
        //     </div>
        //     <div class="allView"></div>
        //   `,
        //   controller: function () {
        //     console.log("entre en app");
        //   }
        // };

        // $stateProvider.state(app);

    }

})();
