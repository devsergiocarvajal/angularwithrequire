(function() {
    'use strict';

    require(['angular'], function(angular) {
        require(['angularwithrequire'], function() {
            angular.element(document).ready(function() {
                angular.bootstrap(document, ['angularwithrequire']);
            });
        });
    });
})();
