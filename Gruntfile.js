/**
 * Created by ericbichara on Oct/12/13.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            def:{
                files: {
                    'client/controllers/controllers.js': ['client/controllers/*.js'],
                    'client/directives/directives.js': ['client/directives/*.js'],
                    'client/services/services.js': ['client/services/*.js']
                }
            }
        },
        uglify: {
            def:{
                files:{
                    'client/controllers/controllers.min.js': ['client/controllers/controllers.js'],
                    'client/directives/directives.min.js': ['client/directives/directives.js'],
                    'client/services/services.min.js': ['client/services/services.js']
                }
            }
        },
        clean:{
            pre:['client/controllers/controllers.js',
                'client/directives/directives.js',
                'client/services/services.js',
                'client/controllers/controllers.min.js',
                'client/directives/directives.min.js',
                'client/services/services.min.js'],
            post:['client/controllers/controllers.js',
                'client/directives/directives.js',
                'client/services/services.js']
        },
        watch:{
            options:{
                livereload: 35729
            },
            scripts:{
                files: ['**/*.js', '**/*.scss', '**/*.html', '!**/node_modules/**'],
                tasks: ['default']
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'client/content/scss',
                    cssDir: 'client/content/css'
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task(s).
    grunt.registerTask('default', ['clean:pre', 'concat', 'compass', 'watch']);

};