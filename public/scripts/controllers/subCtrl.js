define(["angular","angular-modules"],function(angular,modules){
	
	modules.controllers.controller("subCtrl",["$scope",function($sc){
		$sc.name = "sub app";
	}]);
});