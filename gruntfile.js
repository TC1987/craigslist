module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Transpile stylus to CSS and store new file into public folder.
        stylus: {
            compile: {
                options: {},
                files: {
                    'public/stylesheets/style.css': 'app/stylesheets/style.styl'
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    'public/js/script.min.js': ['app/models/script.js']
                }
            }
        },

        // Watch for any updates and reload the page.
        watch: {
            css: {
                files: ['gruntfile.js', 'app/stylesheets/*'],
                tasks: ['stylus'],
                options: { livereload: 10000 }
            },
            js: {
                files: ['gruntfile.js', 'app/js/*', 'app/models/*'],
                tasks: ['uglify'],
                options: { livereload: 10000 }
            },
            html: {
                files: ['app/views/*'],
                tasks: [],
                options: { livereload: 10000 }
            }
        }
    });

    // Load tasks from node_modules.
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Commands
    grunt.registerTask('default', ['uglify', 'stylus', 'watch']);
    grunt.registerTask('publish', ['stylus']);
};
