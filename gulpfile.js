var gulp = require('gulp');

gulp.task('default', defaultTask);


function defaultTask(done) {
  done();
}

gulp.task('minify-css', function (done) {
  return gulp.src('./css/*.css')
    .pipe(gulp.dest('dist/css/'))
  done();
})