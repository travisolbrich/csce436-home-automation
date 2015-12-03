'use strict';

var chiAppControllers = angular.module('chiAppControllers', []);

chiAppControllers.controller('SpacesController', ['$scope', '$rootScope',
        function ($scope, $rootScope) {
            $rootScope.title = 'Spaces';
            $scope.spaces = spaces;

            $scope.addSpace = function () {
                console.log($scope.spaces);
                spaces.push({
                    name: 'test',
                    targets: [
                        'sound'
                    ]
                });
                $scope.spaces = spaces;
            }
        }]
);