'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rimraf = require('gulp-rimraf');

var paths = {
  scripts: ['src/**/*.js', '!src/config.js'],
  fonts: ['bower_components/font-awesome/fonts/**/*.*'],
  less: ['src/**/*.less'],
  vendors: [
    'bower_components/react/react.min.js',
    'bower_components/requirejs/require.js'
  ]
};

// Clean build folder
gulp.task('clean', function () {
  return gulp.src('build', {read: false})
    .pipe(rimraf());
});

gulp.task('clean-css', function () {
  return gulp.src('build/css', {read: false})
    .pipe(rimraf());
});

gulp.task('clean-js', function () {
  return gulp.src('build/app.js', {read: false})
    .pipe(rimraf());
});

gulp.task('vendors', function () {
  return gulp.src(paths.vendors)
    .pipe(gulp.dest('build/vendors'));
});

// Compile less and minify the css file
gulp.task('css', ['clean-css', 'icon-font'], function () {
  return gulp.src('src/app.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'));
});

// Move icon font folder to build directory
gulp.task('icon-font', function() {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest('build/fonts'));
});

// Compile react js file and do code checking, uglifying and concatenation
gulp.task('script', ['clean-js'], function () {
  return gulp.src(paths.scripts)
    .pipe(babel())
    .pipe(uglify())
    //.pipe(concat('app.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['script']);
  gulp.watch(paths.less, ['css']);
});

gulp.task('default', ['watch', 'script', 'css', 'vendors']);
