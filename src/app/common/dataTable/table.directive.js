(function () {
  'use strict';

  angular.module('ttdDemo')
    .directive('tableSearch', TableSearch)
    .directive('pageSelect', PageSelect);

	function TableSearch() {
		return {
			restrict: 'E',
			template: '<div class="search"><md-input-container><label>Search</label><input st-search class="input-sm form-control" type="search" /></md-input-container></div>'
		};
	}

	function PageSelect() {
		return {
			restrict: 'E',
			template: '<md-input-container><input type="text" class="select-page" ng-model="inputPage" aria-label="page number" ng-model-options="{ debounce: 500 }" ng-change="selectPage(inputPage)"></md-input-container>',
			link: function(scope) {
				scope.$watch('currentPage', function(c) {
					scope.inputPage = c;
				});
			}
        };
	}
})();