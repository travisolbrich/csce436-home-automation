'use strict';

var chiAppControllers = angular.module('chiAppControllers', []);

chiAppControllers.controller('SpacesController', ['$scope', '$rootScope', 'ngDialog',
        function ($scope, $rootScope, ngDialog) {
            $rootScope.title = 'Spaces';
            $scope.spaces = spaces;

            $scope.addSpace = function () {
                ngDialog.open({template: 'partials/addSpace.html'})
            }
        }]
);