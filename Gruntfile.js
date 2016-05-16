module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			all: {
				options: {
					paths: ['build/public/css']
				},
				files: [{
					expand: true,
					cwd: 'src/less',
					src: ['*.less'],
					dest: 'src/css',
					ext: '.css'
				}]
			}
		},
		coffee: {
			all: {
				files: [{
					expand: true,
					cwd: 'src/coffee',
					src: ['*.coffee'],
					dest: 'src/js',
					ext: '.js'
				}]
			}
		},
		typescript: {
			all: {
				files: [{
					expand: true,
					cwd: 'src/typescript',
					src: ['*.ts'],
					dest: 'src/js',
					ext: '.js'
				}]
			}
		},
		uglify: {
			all: {
				options: {
					mangle: false
				},
				files: [{
					expand: true,
					cwd: 'src/js',
					src: ['*.js', '!*.min.js'],
					dest: 'build/public/js',
					ext: '.min.js'
				}]
			}
		},
		cssmin: {
			all: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css', '!*.min.css'],
					dest: 'build/public/css',
					ext: '.min.css'
				}]
			}
		},
		copy: {
			all: {
				files: [
					{
						expand: true,
					 	src: ['./build/**'],
						dest: 'public'
					},
					{
						expand: true,
						src: ['opr.node'],
						dest: 'lib/opr.node'
					}
				]
			}
		},
		run: {
			server: {
				cmd: 'node',
				args: [
					'./server.js'
				]
			}
		},
		gyp: {
			opr: {
				//command: 'configure'
				command: 'build'
			}
		},
		clean: {
			all: [
				'build/public/js/*.js',
				'build/public/css/*.min.css',
				'!build/public/js/*.min.js',
				'public/css/*.css',
				'public/js/*.js'
			],
			opr: [
				'build/**/opr.node'
			]
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-bower');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-run');
	grunt.loadNpmTasks('grunt-node-gyp');

	grunt.registerTask('default', [ 'clean:all', 'cssmin:all', 'coffee:all', 'typescript:all', 'less:all', 'gyp:opr', 'copy:all', 'clean:opr']);
	grunt.registerTask('server', [ 'clean:all', 'cssmin:all', 'coffee:all', 'typescript:all', 'less:all', 'gyp:opr', 'copy:all', 'clean:opr', 'run:server']);

};
