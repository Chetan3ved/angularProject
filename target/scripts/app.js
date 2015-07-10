define(["angular","angular-route","angular-resource","angular-animate","controllers","filters","directives"
,"services"],function(e){var t=e.module("myApp",["ngRoute","ngAnimate","ngResource","controllers","directives"
,"services","filters"]);return t.config(["$routeProvider","$locationProvider","$httpProvider",function(
e,t,n){t.html5Mode(!1),e.when("/myApp/main",{templateUrl:"../views/main.html",controller:"mainCtrl"})
.when("/myApp/sub",{templateUrl:"../views/sub.html",controller:"subCtrl"}).otherwise({redirectTo:"/myApp/main"
})}]),t});