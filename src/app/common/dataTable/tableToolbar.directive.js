(function () {
  'use strict';
  angular.module('ttdDemo')
    .directive('tabletoolbar', TableToolbar);

  function TableToolbar() {
    return {
      restrict: 'A',
      replace: false,
      templateUrl: 'app/common/dataTable/tableToolbar.html',
      scope: true,
      controller: function () { },
      controllerAs: 'vm',
      bindToController: {
        tabletoolbar: '=',
        add: '=',
        search: '='
      }
    };
  }
})();
