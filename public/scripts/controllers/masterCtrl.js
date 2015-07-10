define(["angular","angular-modules"],function(angular,modules){
	
	modules.controllers.controller("masterCtrl",["$scope",function($sc){		
		$sc.name = "master ctrl";

		$sc.links = [
			{
				url : '#/myApp/main',
				label : 'main Page',
				id : 'main'
			},
			{
				url : '#/myApp/sub',
				label : 'sub Page',
				id : 'sub'
			}
		];
	}]);
});