var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider
  .when("/home", {
    controller: "myCtrl",
    templateUrl: "views/home.html"
  }).when("/aboutTKD", {
    controller: "myCtrl",
    templateUrl: "views/aboutTKD.html"
  }).when("/aboutUs", {
    controller: "myCtrl",
    templateUrl: "views/aboutUs.html"
  }).when("/classes", {
    controller: "myCtrl",
    templateUrl: "views/classes.html"
  }).when("/contact", {
    controller: "myCtrl",
    templateUrl: "views/contact.html"
  }).when("/FAQ", {
    controller: "myCtrl",
    templateUrl: "views/FAQ.html"
  }).when("/socialMedia", {
    controller: "myCtrl",
    templateUrl: "views/socialMedia.html"
  }).otherwise({
    redirectTo: "/home"
  });
});

app.controller('myCtrl', function($scope, $routeParams){

});
