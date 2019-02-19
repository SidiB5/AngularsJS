var App = angular.module('App', []);
App.controller('MainController', function($scope, $http){
    $http.get('assets/js/cars.json').then(function(res){
        $scope.cars = res.data;
    });
});