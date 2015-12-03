'use strict';

var chiAppControllers = angular.module('chiAppControllers', []);

chiAppControllers.controller('SpacesController', ['$scope', '$rootScope', 'ngDialog',
        function ($scope, $rootScope, ngDialog) {
            $rootScope.title = 'Spaces';
            $scope.spaces = spaces;

            $scope.addSpace = function () {
                ngDialog.open({template: 'partials/addSpace.html', scope: $scope})
            };

            $scope.finishAddSpace = function(spaceName) {
                if(spaceName != null) {
                    spaces.push({name: spaceName, targets: []});
                    ngDialog.closeAll();
                    $scope.spaces = spaces;
                }
            }
        }]
);