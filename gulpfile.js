var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')
// Подключение компрессора для фотографий
var tinyPNG = require('gulp-tinypng-compress');
// Подключение сжатия для js
var uglifyjs = require('uglify-js'); 
var pipeline = require('readable-stream').pipeline;


gulp.task('default', defaultTask);

function defaultTask(done) {
  done();
}

gulp.task('minify-css', function (done) {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/'))

  done();
})

gulp.task('compress', function () {
  return pipeline(
        gulp.src('.js/*.js'),
        uglify(),
        gulp.dest('dist/js/')
  );
});

gulp.task('htmlmin', function (done) {
  return gulp.src('*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))

  done();
})

gulp.task('fonts', function (done) {
  return gulp.src('./fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
  done();
})

gulp.task('tinypng', function (done) {
  return gulp.src('./img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
      key: 'CqCY86sD5k4rrHCHnDr01l9mz1Y92hsP'
    }))
    .pipe(gulp.dest('dist/img/'));
  done();
});

gulp.task('default', gulp.parallel('minify-css', 'compress', 'fonts', 'htmlmin', 'tinypng', function (done) {
  done();
}))