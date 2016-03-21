module.exports = function (grunt) {

	"use strict";

	var config;

	config = {
  	/* watch */
  	watch: {
    	sass: {
      	files: ['webroot/sass/*.scss'],
      	tasks: ['sass']
    	}
  	},
    /* sass */
		sass: {
			'build' : {
				'options': {
					'trace': true,
					'style': 'compressed'
				},
				'files': [{
					'expand': true,
					'cwd': 'webroot/sass',
					'src': ['*.scss'],
					'dest': 'webroot/css/site',
					'ext': '.css'
				}]
			}
		}
	};

	// Init Grunt
	grunt.initConfig(config);

	// Load Tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Register tasks
	grunt.registerTask('default', ['watch']);

};