(function () {
  'use strict';

  angular.module('ttdDemo')
    .factory('RestangularFull', function (Restangular) {
      return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setFullResponse(true);
      });
    });
})();
