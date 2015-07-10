define(["angular","angular-modules"],function(angular,modules){

	modules.controllers.controller("mainCtrl",["$scope",function($sc){
		$sc.name = "some app";
	}]);
});