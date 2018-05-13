var app = angular.module('lesa', ["ngRoute"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
        })
    .when("/about", {
        templateUrl : "about.html", 
        controller  : "about"
        })
    }])
    

app.controller('blog', function($scope, $http) {
    $http({
        method : "GET",
        url : "http://localhost:1337/blog"
    }).then(function mySuccess(response) {
        $scope.blog = response.data;
    }, function myError(response) {
        $scope.blog = response.statusText;
    });
}),

app.controller('about', function($scope, $http) {
    $http({
        method : "GET",
        url : "http://localhost:1337/about"
    }).then(function mySuccess(response) {
        $scope.about = response.data;
        console.log($scope.about);
    }, function myError(response) {
        $scope.about = response.statusText;
        console.log($scope.about);
    });
    console.log($scope.about);
});
