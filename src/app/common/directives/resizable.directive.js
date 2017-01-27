(function () {
  'use strict';
  angular.module('ttdDemo')
    .directive('resizable', function ($window) {
      return {
        link: function (scope) {
          scope.windowWidth = $window.innerWidth;
          scope.windowHeight = $window.innerHeight;
          scope.resizeStyle = {height: $window.innerHeight+'px'};
          scope.getWindowDimensions = function () {
            return {
              'h': $window.innerHeight,
              'w': $window.innerWidth
            };
          };
          scope.$watch(scope.getWindowDimensions, function (newValue) {
            scope.windowWidth = newValue.w;
            scope.windowHeight = newValue.h;
            scope.resizeStyle = {height: newValue.h+'px'};

          }, true);

          $window.addEventListener('resize', function () {
            scope.$apply();
          });
        }
      };
    });
})();
