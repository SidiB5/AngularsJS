app.controller('mainController', ['$scope', function($scope){
   
    $scope.count = 0;
    $scope.plus = function(){
        $scope.count += 1;
    }
    $scope.minus = function(){
        $scope.count -= 1;
    }
}]);