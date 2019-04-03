var app = angular.module('shopGranat', ['ngRoute', 'ngSanitize']);



app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});




app.controller('shopGranat', function($scope, $http) {


    $http.get("assets/json/products.json").then(function(response) {
        $scope.products = response.data;

    });

    $http.get("assets/json/categories.json").then(function(response) {
        $scope.categories = response.data;

    });

});

/*app.run(function($timeout){
    $timeout(function() {
        $(document).foundation();
    }, 500);
});*/

/*app.run(function($rootScope){
    $rootScope.$apply($(document).foundation());
});*/