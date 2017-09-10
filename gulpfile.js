const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

const currentFolder = '1. Navbar';

gulp.task('styles', () => {
  return gulp.src(`${currentFolder}/*.css`)
    .pipe(autoprefixer())
    .pipe(gulp.dest(`${currentFolder}/build`))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['styles'], () => {

  browserSync.init({
    server: `${currentFolder}`
  });

  gulp.watch(`${currentFolder}/*.css`, ['styles']);
  gulp.watch(`${currentFolder}/*.html`).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);