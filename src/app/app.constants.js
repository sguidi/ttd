(function() {
    'use strict';

    angular
        .module('ttdDemo')
        .constant('stConfig', {
            pagination: {
                template: 'template/smart-table/pagination.html',
                itemsByPage: 20,
                displayedPages: 5
            },
            search: {
                delay: 400, // ms
                inputEvent: 'input'
            },
            select: {
                mode: 'single',
                selectedClass: 'st-selected'
            },
            sort: {
                ascentClass: 'st-sort-ascent',
                descentClass: 'st-sort-descent',
                skipNatural: false
            },
            pipe: {
                delay: 100 //ms
            }
        })

    .constant('appConf', {
        Version: '1.0.0',
        URLS: {
            restBase: 'api/',
            root: 'dashboard'
        },

        Toast: {
            Type: {
                Info: 'info',
                Success: 'success',
                Warning: 'warning',
                Error: 'error'
            },
            Positions: {
                Default: 'top right',
                TopLeft: 'top left',
                TopRight: 'top right',
                BottomLeft: 'bottom left',
                BottomRight: 'bottom right'
            },
            Timeout: 5000
        }
    });
})();