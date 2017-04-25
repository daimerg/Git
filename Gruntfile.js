module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n;'
			},
			basic: {
				src: ['js/default.js',
					  'js/main.js'],
				dest: 'js/main.min.js'
			}
		},
		uglify: {
			options: {

			},
			dist: {
				files: {
					'<%= concat.basic.dest%>':['<%= concat.basic.dest%>']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);
}