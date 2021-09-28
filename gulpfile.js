var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulp = require('gulp');

gulp.task('optimize-js', function() {
  return gulp.src('./source/esm/*.js')
    .pipe(concat('onboard.js'))
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
    .pipe(gulp.dest('./dist/js/'))
});