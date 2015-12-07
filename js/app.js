'use strict';

var chiApp = angular.module('chiApp', [
    'ngRoute',
    'ngDialog',
    'mp.colorPicker',
    'rzModule',
    'chiAppControllers'
]);

chiApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/spaces', {
                templateUrl: 'partials/spaces.html',
                controller: 'SpacesController'
            })
            .when('/spaces/:spaceId', {
                templateUrl: 'partials/space.html',
                controller: 'SpaceController'
            })
            .otherwise({
                redirectTo: '/spaces'
            })
    }]
);

