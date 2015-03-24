var gulp = require('gulp'),
		jshint = require('gulp-jshint'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss = require('gulp-minify-css'),
		rename = require('gulp-rename'),
		notify = require('gulp-notify'),
		browserSync = require('browser-sync'),
		reload      = browserSync.reload;

gulp.task('default', ['browser-sync', 'jshint', 'styles', 'watch']);

gulp.task('jshint', function() {
	return gulp.src('./assets/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(reload({stream: true}));
});

gulp.task('styles', function() {
	gulp.src('./assets/sass/*.scss')
		.pipe(sass({
	  	"sourcemap=none": true
	  }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))
		.pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: { baseDir: "./" }
	});
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('assets/**/*.js', ['jshint']);
	gulp.watch('assets/**/*.scss', ['styles']);
	gulp.watch('**/*.html', reload);
});
