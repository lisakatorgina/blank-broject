var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var mustache = require("gulp-mustache-plus");

gulp.task('less', function () {
  return gulp.src('./css/blocks/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('common.css'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('mustache', function () {
	gulp.src('./templates/*.mustache')
    	.pipe(mustache({},{},{
    		head: "./templates/misc/head.mustache",
    		foot: "./templates/misc/foot.mustache"
      }))
    	.pipe(gulp.dest('./'));
})
gulp.task('default', function() {
  gulp.watch("./**/*.less", function(event){
    gulp.run('less');
  });
  gulp.watch('./**/*.mustache', function(event) {
  	gulp.run('mustache');
  });
});
