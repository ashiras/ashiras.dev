'use strict';
 
const gulp = require('gulp'),
      sassLint = require('gulp-sass-lint');
 
gulp.task('sasslint', function () {
  return gulp.src('app/styles/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});