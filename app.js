var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
  .when("/home", {
    controller: "myCtrl",
    templateUrl: "views/home.html"
  }).when("/aboutUs", {
    controller: "myCtrl",
    templateUrl: "views/aboutUs.html"
  }).when("/contactInfo", {
    controller: "myCtrl",
    templateUrl: "views/contactInfo.html"
  }).when("/getStarted", {
    controller: "myCtrl",
    templateUrl: "views/getStarted.html"
  }).when("/socialMedia", {
    controller: "myCtrl",
    templateUrl: "views/socialMedia.html"
  }).when("/studentInfo", {
    controller: "myCtrl",
    templateUrl: "views/studentInfo.html"
  }).otherwise({
    redirectTo: "/home"
  });
});

app.controller('myCtrl', function($scope, $routeParams){

});
