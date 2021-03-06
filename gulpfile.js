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
	gulp.src('./templates/**/*.mustache')
    	.pipe(mustache('./js/data.json', {},{
        head: "./templates/partials/head.mustache",
        foot: "./templates/partials/foot.mustache",
        header: "./templates/partials/header.mustache",
        main_slider: "./templates/partials/main-slider.mustache",
        footer: "./templates/partials/footer.mustache",
        iconblock: "./templates/partials/iconblock.mustache",
        actions: "./templates/partials/actions.mustache",
        imageblock: "./templates/partials/imageblock.mustache",
        imagenav: "./templates/partialsimagenav.mustache"
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
