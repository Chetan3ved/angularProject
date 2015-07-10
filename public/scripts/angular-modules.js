define(["angular"],function(angular){
	
	var controllers = angular.module("controllers",[]);
	var directives = angular.module("directives",[]);
	var filters = angular.module("filters",[]);
	var services = angular.module("services",[]);

	var modules = {
		controllers : controllers,
		directives : directives,
		filters : filters,
		services : services		
	}
	
	return modules; 
})