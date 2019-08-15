var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')
// Подключение компрессора для фотографий
var tinyPNG = require('gulp-tinypng-compress');
var rename = require("gulp-rename");


var uglifyjs = require('uglify-js');
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var minify = composer(uglifyjs, console);


gulp.task('default', defaultTask);

function defaultTask(done) {
  done();
}

gulp.task('compress', function (cb) {
  // the same options as described above
  var options = {};

  pump([
      gulp.src(['./js/*.js', '!./js/*.min.js']),
      minify(options),
      rename({
        suffix: '.min'
      }),
      gulp.dest('dist/js/')
    ],
    cb()
  );
});


gulp.task('minify-css', function (done) {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/'))

  done();
})


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