//Put any lib you don't want to minimize into exclude array of tha modules
//See all properties definition : https://github.com/jrburke/r.js/blob/master/build/example.build.js
({
    baseUrl : "../public/scripts"
	,appDir : "../public"
    ,dir : "../target"
    ,mainConfigFile : "../public/scripts/config.js"
    // ,fileExclusionRegExp: /^node_modules$/
    ,paths : {
    	"bootstrap" : "bootstrap"
    }
    ,modules : [
        {
        	name: "bootstrap",
            exclude : ["angular","angular-route","angular-animate","angular-resource"]
        },
        {
            name : "angular"            
        }
    ]    
    ,skipDirOptimize: false
    ,keepBuildDir: false            //delte target before optimization
    ,uglify : {
        max_line_length : 100
    },
    // generateSourceMaps: true    
})