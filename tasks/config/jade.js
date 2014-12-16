/**
 * Compile Jade Templates to HTML
 */
module.exports = function(grunt) {

  grunt.config.set('jade', {
    dev: {
      options: {
        bare: true,
        sourceMap: true,
        sourceRoot: './'
      },
      files: [{
        expand: true,
        cwd: 'assets/js/app',
        src: ['**/*.jade'],
        dest: 'assets/templates',
        ext: '.html'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
};
