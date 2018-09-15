var angularTodo = angular.module('angularTodo', []);
angularTodo.controller('angulartodoController', function($scope) {
    $scope.todoListitems = [];

    $scope.todoAdd = function() {
        $scope.todoListitems.push({todoText:$scope.todoInputadded});
        $scope.todoInputadded=null;
    };
    $scope.remove = function() {
        var oldList = $scope.todoListitems;
        $scope.todoListitems = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoListitems.push(x);
        });
    };
});