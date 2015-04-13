module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// leave the .git folder to keep vcs using Github pages
		clean: {
			dist: {
				src: ['<%= dist_folder %>/*', '!<%= dist_folder %>/.git', '.tmp/']
			}
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= main_folder %>/_site',
					src: ['*', '**/**', '!js/**', '!css/*', '!bower_components/**'],
					dest: '<%= dist_folder %>/'
				}]
			}
		},
		useminPrepare: {
			html: ['<%= main_folder %>/_site/index.html'],
			options: {
				dest: '<%= dist_folder %>'
			}
		},

		usemin: {
			html: ['<%= dist_folder %>/**/*.html', '!<%= main_folder %>/bower_components/**'],
			css: ['<%= dist_folder %>/css/**/*.css'],
			options: {
				dirs: ['<%= dist_folder %>']
			}
		},
		wiredep: {
			target: {
				src: [
					'<%= main_folder %>/_includes/*.html'
				],
				exclude: [
					'modernizr',
					'jquery-placeholder',
					'jquery.cookie',
					'foundation'
				]
			}
		},
		shell: {
			startServer: {
				command: 'jekyll serve',
				options: {
					stderr: false,
					execOptions: {
						cwd: '<%= main_folder %>'
					}
				}
			},
			buildSite: {
				command: 'jekyll build',
				options: {
					stderr: false,
					execOptions: {
						cwd: '<%= main_folder %>'
					}
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-shell');
	// Default task(s).
	grunt.registerTask('default', ['shell:startServer']);
	grunt.registerTask('build', ['shell:buildSite']);
	grunt.registerTask('clear', ['clean']);
	grunt.registerTask('dist', ['clean:dist', 'useminPrepare', 'copy:dist', 'concat', 'cssmin', 'uglify', 'usemin']);
	grunt.registerTask('bower', ['wiredep', 'shell:buildSite']);

};
