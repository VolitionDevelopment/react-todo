/**
 * Created by Jackson on 8/15/16.
 */
var app = angular.module('todo', []);
app.controller('todoCtrl', function($scope){
    $scope.todos = [];
    $scope.title = '';

    $scope.addTodo = function(){
        if($scope.title !== ''){
            $scope.todos.push({
                title: $scope.title,
                editMode: false,
                completed: false
            });
        }

        $scope.title = '';
    };

    $scope.remove = function(index){
        $scope.todos.splice(index, 1);
    }
});

app.directive('todoItem', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/todo.html'
    }
});

//Thanks Stack Overflow
app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});