var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');

gulp.task('sass',function(){
    return gulp.src('./scss/*.scss')
               .pipe(plumber())
               .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
               .pipe(cssmin())
               .pipe(gulp.dest('./css'));
})

gulp.task('build', ['sass']);

var watcher = gulp.watch(['./scss/*.scss', './scss/*/*.scss'], ['build']);
watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});