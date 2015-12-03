'use strict';

var chiApp = angular.module('chiApp', [
    'ngRoute',
    'ngDialog',
    'chiAppControllers'
]);

chiApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/spaces', {
                templateUrl: 'partials/spaces.html',
                controller: 'SpacesController'
            })
            .otherwise({
                redirectTo: '/spaces'
            })
    }]
);

