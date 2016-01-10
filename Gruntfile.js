module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            javascript: { // concatinates js files
                src: [
                    'js/jquery.js',
                    'js/bootstrap.min.js',
                    'js/jquery.easing.min.js',
                    '/js/grayscale.js',
                    'js/scrollReveal.js',
                    'js/parallax.min.js'
                ],
                dest: 'build/js/script.js',
            },
            css: {  // concatinates css files
                src: [
                    'css/bootstrap.min.css',
                    'css/grayscale.css',
                    'css/style.css'
                ],
                dest: 'build/css/style.css',
            }
        },

        uglify: {  // minifies js files
            build: {
                src: 'build/js/script.js',
                dest: 'build/js/script.min.js'
            }
        },

        cssmin: {  // minifies css files
          target: {
            files: [{
              expand: true,
              cwd: 'build/css',
              src: ['style.css'],
              dest: 'build/css',
              ext: '.min.css'
            }]
          }
        },

        imagemin: {  // minifies images
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg}'],
                    dest: 'build/img/'
                }]
            }
        },

        watch: {  // watch for changes in js files
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {  // watch for changes in css files
                files: ['css/*.css'],
                tasks: ['concat', 'cssmin'],
                options: {
                    spawn: false,
                }
            },
            images: {  // watch for changes in images
                files: ['img/*.{png,jpg}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','uglify','cssmin','imagemin','watch']);

};