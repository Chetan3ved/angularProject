define(["angular","angular-modules"],function(angular,modules){
	modules.services.filter("sample-service",function(){
		return "hello";
	});
});