(function() {
    'use strict';

    require.config({
        paths: {
            // General dependencies
            'angular':  '../bower_components/angular/angular.min',

            // Local dependencies
            'angularwithrequire': 'angularwithrequire/angularwithrequire.module'
        },

        shim: {
            'angular': {
                exports: 'Angular'
            },
            'angularwithrequire': {
                deps: ['angular']
            }
        }
    });

    require({
        'codejobs/bootstrap'
    });
})();
