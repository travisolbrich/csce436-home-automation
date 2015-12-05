'use strict';

var chiAppControllers = angular.module('chiAppControllers', []);

chiAppControllers.controller('SpacesController', ['$scope', '$rootScope', 'ngDialog', '$location',
        function ($scope, $rootScope, ngDialog, $location) {
            $rootScope.title = 'Spaces';
            $scope.spaces = spaces;

            $scope.addSpace = function () {
                ngDialog.open({template: 'partials/addSpace.html', scope: $scope})
            };

            $scope.goToSpace = function(spaceId) {
                $location.path('spaces/'+spaceId);
            };

            $scope.finishAddSpace = function(spaceName) {
                if(spaceName != null) {
                    spaces.push({name: spaceName, id: spaceName.replace(" ", "-").toLowerCase(), targets: []});
                    ngDialog.closeAll();
                    $scope.spaces = spaces;
                }
            }
        }]
);

chiAppControllers.controller('SpaceController', ['$scope', '$rootScope', 'ngDialog', '$location', '$routeParams',
        function ($scope, $rootScope, ngDialog, $location, $routeParams) {
            var space;
            var spaceIndex;

            spaces.forEach(function(element, index) {
                if(element.id == $routeParams.spaceId) {
                    space = element;
                    spaceIndex = index;
                }
            });

            $scope.getTargetName = function(targetId) {
                var name;
                targets.forEach(function(target, index) {
                    console.log(target.id);
                    if(target.id == targetId) {
                        name = target.name;
                    }
                });
                return name;
            };

            $rootScope.title = space.name;
            $scope.targets = space.targets;
            $scope.availableTargets = targets;

            $scope.addTarget = function () {
                ngDialog.open({template: 'partials/addTarget.html', scope: $scope})
            };

            $scope.goToSpace = function(spaceName) {
                $location.path('spaces/'+spaceName);
            };

            $scope.finishAddTarget = function(targetId) {
                if(targetId != null) {
                    space.targets.push(targetId);
                    spaces[spaceIndex] = space;
                    ngDialog.closeAll();
                    $scope.targets = space.targets;
                }
            }
        }]
);