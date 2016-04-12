module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
  	// watch
  	watch: {
    	sass: {
      	files: ['webroot/sass/*.scss'],
      	tasks: ['sass', 'concat']
    	}
  	},
    // sass
		sass: {
			'build': {
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
		},
		// concat
		concat: {
  		options: {
    		separator: ';',
    		stripBanners: true
  		},
  		dist: {
    		src: ['webroot/css/site/layout.css', 'webroot/css/site/paginas.css'],
    		dest: 'webroot/css/site/estilos.css',
  		}
		}
	});

	// Load Tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Register tasks
	grunt.registerTask('default', ['watch']);
};