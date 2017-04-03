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

        // Watch for any updates and reload the page.
        watch: {
            css: {
                files: ['gruntfile.js', 'app/stylesheets/*'],
                tasks: ['stylus'],
                options: { livereload: 10000 }
            },
            js: {
                files: ['gruntfile.js', 'app/js/*'],
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

    // Commands
    grunt.registerTask('default', ['stylus', 'watch']);
    grunt.registerTask('publish', ['stylus']);
};
