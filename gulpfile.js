'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var path = require('path');

gulp.task('default', ['css'], function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(eslint())
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
  return gulp.src('src/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('build'));
});
