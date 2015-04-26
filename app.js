var app = angular.module("MyApp", []).
  config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when("/view/:id",
        { templateUrl: "home.html",
          controller: "ShowCtrl" }).
      otherwise( { redirectTo: "/foo" });
});

/* Controllers */

function ShowCtrl($scope, Page,id) {
    console.log(Page);
    $scope.page= Page; 
    console.log(id);
}

