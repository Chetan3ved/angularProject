define(["angular","angular-modules"],function(angular,modules){	
	modules.filters.filter("sampleFilter",function(){
		return function(input){
			return input + " hey";;
		}
	});
});