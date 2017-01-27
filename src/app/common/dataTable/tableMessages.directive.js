(function () {
  'use strict';
  angular.module('ttdDemo')
    .directive('tablemessages', TableMessages);

  function TableMessages(){
      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/common/dataTable/tableMessages.html',
        scope:true,
        controller: function(){},
        controllerAs: 'vm',
        bindToController:{
          tablemessages: '='
        }
      };
    }
})();
