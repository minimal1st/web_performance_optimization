/*
cleancss and csso applied on:
css/style.css
css/print.css

uglify applied on:
js/perfmatters.js

htmlmin applied on:
project-2048.html
project-mobile.html
project-webperf.html
views/pizza.html
index.html

imagemin applied on:
img/2048.png
img/cam_be_like.jpg
img/mobilewebdev.jpg
img/profilepic.jpg
views/images/pizzeria.jpg

plugins used:
gulp-imagemin
gulp-htmlmin
gulp-clean-css
gulp-uncss
gulp-csso
gulp-uglify
gulp-css-inliner
*/

var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin');
var uncss = require('gulp-uncss');
var cleancss = require('gulp-clean-css');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('htmlmin-main', function() {
	gulp.src('src/*.html')
  	.pipe(htmlmin({collapseWhitespace: true}))
  	.pipe(gulp.dest('dist'));

});

gulp.task('htmlmin-views', function() {
	gulp.src('src/views/*.html')
  	.pipe(htmlmin({collapseWhitespace: true}))
  	.pipe(gulp.dest('dist/views'));

});
/*
gulp.task('uncss-main', function () {
    return gulp.src('src/css/*.css')
    .pipe(uncss({html: ['./src/index.html']}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('uncss-views', function () {
    return gulp.src('src/views/css/*.css')
    .pipe(uncss({html: ['./src/views/index.html']}))
    .pipe(gulp.dest('dist/views/css'));
});
*/

gulp.task('cleancss-main', function () {
    return gulp.src('src/css/*.css')
	.pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('file-copying', function () {
    return gulp.src('src/views/js/*.js')
    .pipe(gulp.dest('dist/views/js'));
});

gulp.task('cleancss-views', function () {
    return gulp.src('src/views/css/*.css')
	.pipe(cleancss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/views'));
});

gulp.task('csso-main', function() {
   	return gulp.src('src/css/*.css')   
    .pipe(csso()) 
    .pipe(gulp.dest('dist/css'));           	     	

});

gulp.task('csso-views', function() {
    return gulp.src('src/views/css/*.css')        	
    .pipe(csso())
    .pipe(gulp.dest('dist/views/css'));        
});

gulp.task('uglify-main', function() {
  	return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('imagemin-main', function() {
	return gulp.src('src/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'))
});

gulp.task('imagemin-views', function() {
	return gulp.src('src/views/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/views/images'))
});

gulp.task('default', function() {
    gulp.start(
    	'htmlmin-main',
    	'htmlmin-views', 
    	'cleancss-main',
    	'cleancss-views',
    	'csso-main',
    	'csso-views',
        'uglify-main',
        'file-copying',
    	'imagemin-main',
    	'imagemin-views'
    	);
});