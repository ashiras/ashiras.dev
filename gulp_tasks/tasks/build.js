const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

gulp.task('build', ['lint', 'html', 'html:about', 'images', 'fonts', 'extras', 'extras:assets'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});
