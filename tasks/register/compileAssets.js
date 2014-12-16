module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
    'jade:dev',
		'less:dev',
		'copy:dev',
    'jst:dev',
		'coffee:dev'
	]);
};
