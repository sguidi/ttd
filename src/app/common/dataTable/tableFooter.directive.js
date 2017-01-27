(function () {
  'use strict';
  angular.module('ttdDemo')
    .directive('tablefooter', TableFooter);

  function TableFooter(){
      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/common/dataTable/tableFooter.html',
        scope:true,
        controller: function(){},
        controllerAs: 'vm',
        bindToController: {
          tablefooter: '='
        }
      };
    }
})();
