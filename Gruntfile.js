module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
        app: {
            files: {
                'static/dist/js/app.js': 'static/dev/js/main.js'
            },
            options: {
                //watch: true,
                browserifyOptions: {
                    debug: true,
                    standalone: 'GolfApp'
                },
                transform: ['hbsfy', ['uglifyify', {'global': true}]]
            }
        }
    },


    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        report: 'min',
        beautify: true
      },
      build: {
        files: {
          'static/dist/js/infastructure.js':
          [
            'static/dev/js/libs/jquery-1.11.2.min.js',
            'static/dev/js/libs/underscore.js',
            'static/dev/js/libs/handlebars.js',
            'static/dev/js/libs/backbone.js',
            'static/dev/js/libs/backbone.marionette.js',
            'static/dev/js/libs/backbone-faux-server.js',
            'static/dev/js/libs/backbone-deep-model.js',
            'static/dev/js/libs/backbone.wreqr.js',
            'static/dev/js/libs/google.maps.js'
          ]
        }
      }
    },


    // jshint: {
    //   beforeconcat: ['static/dev/js/app.js']
    // },


    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        src: [
          'static/dev/js/libs/jquery.min.js',
          'static/dev/js/app.js'
        ],
        dest: 'static/dist/js/app.min.js'
      }
    },


    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: true
        },
        files: {
          'static/dist/css/main.min.css': 'static/dev/sass/main.scss'
        }
      }
    },


    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      your_target: {
        src: 'static/dist/css/main.min.css',
        dest: 'static/dist/css/main.min.css'
      },
    },


    watch: {
      options: {
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
          grunt.log.writeln('Waiting for more changes...');
        },
      },
      hbs: {
        files: ['static/dev/**/*.hbs'],
        tasks: ['concat', 'uglify', 'handlebars', 'browserify']
      },
      scripts: {
        files: 'static/dev/**/*.js',
        tasks: ['concat', 'uglify', 'browserify']
      },
      css: {
        files: ['static/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    },


    copy: {
      main: {
        files: [
          { expand: true, cwd: 'bower_components/jquery/', src: ['jquery.min.js'], dest: 'static/dev/js/libs/' },
          { 
            expand: true, 
            cwd: 'bower_components/normalize-css/', 
            src: ['normalize.css'], 
            dest: 'static/dev/sass/libs/',
            rename: function(dest, src) {
              return dest + src.substring(0, src.indexOf('.')) + '.scss'; // Rename normalize.css to .scss
            }
          }
        ]
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: "GolfApp.Templates",
          processName: function(filePath) {
            return filePath.replace( 'static/dev/hbs/', '').replace(/\.hbs$/, '');
          }
        },
        files: {
          "static/dev/js/templates.js": "static/dev/**/*.hbs"
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'sass', 'uglify', 'browserify', 'autoprefixer', 'handlebars']);

};