(function() {
    'use strict';

    angular
        .module('ttdDemo')
        .config(themeConfig)
        .config(logConfig)
        .config(restConfig)
        .config(function( $mdGestureProvider ) {
            //Fix touch event on maps for mobile
            //See https://github.com/angular/material/issues/1441
            $mdGestureProvider.skipClickHijack();
        })
        .config(tablePaginationConfig);

    function themeConfig($mdThemingProvider) {
        $mdThemingProvider.definePalette('primary', {
            50: "rgba(244, 224, 235,1)",
            100: "rgba(227, 182, 207,1)",
            200: "rgba(211, 137, 177,1)",
            300: "rgba(192, 89, 145,1)",
            400: "rgba(179, 55, 122,1)",
            500: "rgba(169, 17, 100, 1)",
            600: "rgba(151, 20, 91,1)",
            700: "rgba(135, 18, 81,1)",
            800: "rgba(119, 15, 71,1)",
            900: "rgba(87, 9, 51,1)",
            'A100': "rgba(169, 17, 100,1)",
            'A200': "rgba(169, 17, 100,1)",
            'A400': "rgba(169, 17, 100,1)",
            'A700': "rgba(169, 17, 100,1)",
            'contrastDefaultColor': 'light'
        });

        $mdThemingProvider.definePalette('accent', {
            50: "rgba(244, 224, 235,1)",
            100: "rgba(227, 182, 207,1)",
            200: "rgba(211, 137, 177,1)",
            300: "rgba(192, 89, 145,1)",
            400: "rgba(179, 55, 122,1)",
            500: "rgba(169, 17, 100, 1)",
            600: "rgba(151, 20, 91,1)",
            700: "rgba(135, 18, 81,1)",
            800: "rgba(119, 15, 71,1)",
            900: "rgba(87, 9, 51,1)",
            'A100': "rgba(169 , 17, 100,1)",
            'A200': "rgba(169 , 17, 100,1)",
            'A400': "rgba(169 , 17, 100,1)",
            'A700': "rgba(169 , 17, 100,1)",
            'contrastDefaultColor': 'light'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('primary')
            .accentPalette('accent');
    }

    function logConfig($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
    }

    function restConfig(RestangularProvider, UtilsServiceProvider, appConf) {
        // Configure RestAngular
        RestangularProvider.setBaseUrl(appConf.URLS.restBase);

        /*RestangularProvider.setErrorInterceptor(function(response){
            var unauthorizeds = [401,402,403,407];
            if(_.find(unauthorizeds, function(error){return error === response.status;}) != null){
            console.log("Unauthorized - Error $s",response.status);
                NavService.$get().changeState({go:"login"});
            }
        });*/
    }

    function tablePaginationConfig(stConfig){
        stConfig.pagination.template = "app/common/dataTable/paginationInput.custom.html";
    }

})();