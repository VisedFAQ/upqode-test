// Gulp.js configuration
var
  // modules
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create()


// browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
    notify: false,
  })
})

// pug to html
gulp.task('pug', function buildHTML() {
  return gulp.src('src/pug/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('build/'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

// scss to css
gulp.task('sass', function(){
  return gulp.src('src/scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// js concat and minify
gulp.task('scripts', function() {
  return gulp.src(['src/js/jquery-3.0.0.min.js', 'src/js/jquery-migrate-1.4.1.min.js', 'src/js/slick.min.js', 'fde01c2339.js', 'src/js/wow.min.js', 'src/js/pushy.min.js', 'src/js/custom.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

// watcher
gulp.task('watch', ['browserSync', 'sass', 'pug', 'scripts'], function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/pug/**/*.pug', ['pug']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  // Other watchers
})

gulp.task('default', ['watch']);
