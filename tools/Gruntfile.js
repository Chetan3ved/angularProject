module.exports = function(grunt){

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jshint : {
			files : ['Gruntfile.js','scripts/**/*.js','tests/**/*.js'],
			options : {

			}			
		},
		watch : {
			files : ['<%= jshint.files %>'],
			tasks : ['jshint']
		},
		sass : {
			'stylesheets/compile.css' : ['stylesheets/sass/**/*.scss']			
		},
		concat : {
			options : {
				separator : ';\n',
				banner : '//Creator : Prajak Khruasuwan\n\n'
			},
			dist : {								
				files : {
					'target/script.js' : ['scripts/*.js','scripts/**/*.js']	
				}				
			}
		},
		copy : {
			main : {
				files : [
					{expand : true, src : ['index.html'], dest : 'target/'},
					{expand : true, src : ['scripts/*.js','scripts/**/*.js'], dest : 'target/'},
					{expand : true, src : ['stylesheets/*.css','stylesheets/**/*.css'], dest : 'target/'},
					{expand : true, src : ['images/*'], dest : 'target/'},
					{expand : true, src : ['node_modules/**'], dest : 'target/'},
					{expand : true, src : ['views/*.html','views/**/*.html'], dest : 'target/'}					
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default',['watch']);
	// grunt.registerTask('style',['sass']);	
};