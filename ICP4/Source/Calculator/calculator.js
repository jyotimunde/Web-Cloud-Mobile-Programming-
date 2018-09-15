angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
            if ($scope.operations == '+') {
                return $scope.c + $scope.d;
            }
            if ($scope.operations == '-') {
                return $scope.c - $scope.d;
            }
            if ($scope.operations == '*') {
                return $scope.c * $scope.d;
            }
            if ($scope.operations == '/') {
                return $scope.c / $scope.d;
            }
        };
    });
