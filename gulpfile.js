// Dependencies and plugins:
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload'),
	watch = require('gulp-watch'),
	concat = require('gulp-concat');

// Set paths: 
var paths = {
  sass: 'src/scss/'
};

// Gulp tasks
gulp.task('sass-to-css', function(){
	return gulp.src(sassRoot+'main.scss')
		.pipe(sass({sourcemap: true}))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
 	
});

gulp.task('default', ['watch']);