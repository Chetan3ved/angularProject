define(["angular","angular-route","angular-resource","angular-animate","controllers", "filters","directives","services"],
	function(angular){
	'use strict';	
	
	var myApp = angular.module("myApp",["ngRoute","ngAnimate","ngResource","controllers","directives","services","filters"]);

	myApp.config(['$routeProvider','$locationProvider','$httpProvider',function($routeProvider,$locationProvider,$httpProvider){
		//turn html 5 hash off
		$locationProvider.html5Mode(false);

		//$httpProvider.interceptors.push('serviceName');

		$routeProvider
		.when('/myApp/main',{
			templateUrl : '../views/main.html',
			controller : 'mainCtrl'
		})
		.when('/myApp/sub',{
			templateUrl : '../views/sub.html',
			controller : 'subCtrl'
		})
		.otherwise({
			redirectTo : '/myApp/main'
		});
	}]);

	return myApp;
	// angular.bootstrap(document,["myApp"]);

	// window.myApp = myApp;
});