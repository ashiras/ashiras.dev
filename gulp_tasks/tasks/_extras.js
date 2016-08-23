const gulp = require('gulp');

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('extras:assets', () => {
  return gulp.src([
    'app/assets/**/*.*'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/assets'));
});
