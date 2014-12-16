module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
    'jade:dev',
		'less:dev',
		'sync:dev',
    'jst:dev',
		'coffee:dev'
	]);
};
