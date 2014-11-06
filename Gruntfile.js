module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          "public/styles.css": "styles.less",
        }
      },
      production: {
        options: {
          cleancss: true,
        },
        files: {
          "public/styles.min.css": "styles.less",
        }
      }
    },
    react: {
      production: {
        files: {
          'public/kerpun.js': [
          'jsx/releases.jsx',
          ]
        }
      }
    },
    bower: {
      install: {
        options: {
          copy: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.registerTask('setup', ['bower', ]);
  grunt.registerTask('build', ['less', 'react', ]);
  grunt.registerTask('default', ['setup', 'build', ]);
};
