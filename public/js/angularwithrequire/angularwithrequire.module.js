(function() {
    'use strict';

    define(function(require) {
        var angular = require('angular');

        var angularwithrequire = angular.module('angularwithrequire', []);

        angularwithrequire.controller('homeController', HomeController);

        HomeController.$inject = ['$scope'];

        function HomeController($scope) {
            var vm = this;
            vm.name = 'Angular with require';
        }


    });

})();
