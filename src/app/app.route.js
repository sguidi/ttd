(function() {
  'use strict';

  angular
    .module('ttdDemo')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig(appConf, $stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      // Authenticated functionality
      .state('demo',{
        url: '/'+ appConf.URLS.root,
        templateUrl: 'app/demo/demo.html',
        controller: 'DemoCtrl',
        controllerAs: 'demoCtrl'
      });

    $urlRouterProvider
      //Keep this syntax, otherwise the "OTHERWISE" state is kept in the $state.go chain and crate an infinite loop
      .otherwise(function ($injector) {
        var $state = $injector.get("$state");
        $state.go("demo");
      });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

})();
