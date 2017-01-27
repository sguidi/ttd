(function() {
    'use strict';

    angular
        .module('ttdDemo')
        .run(stateChangeStartConfig)
        .run(dataTablePaginatorConfig)


    function stateChangeStartConfig(appConf, $timeout, $rootScope, $state, $stateParams, $log) {
        $rootScope.$on('$stateChangeStart', function(evt, nextState, params) {
        }); //$rootScope.$on
    }

    function dataTablePaginatorConfig($templateCache) {
        $templateCache.put('dataTable.pagination.custom.html',
            '<nav ng-if="numPages && pages.length >= 2"><ul class="pagination"><li><a ng-click="selectPage(1)">First</a><li ng-repeat="page in pages" ng-class="{active: page==currentPage}" ng-click="selectPage(page)"><a>{{page}}</a></li><li><a ng-click="selectPage(numPages)">Last</a></ul></nav>');
    }
})();