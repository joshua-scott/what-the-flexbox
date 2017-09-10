const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

const currentFolder = '1. Navbar';

gulp.task('styles', () => {
  gulp.src(`${currentFolder}/*.css`)
    .pipe(autoprefixer())
    .pipe(gulp.dest(`${currentFolder}/build`));
});

gulp.task('watch', () => {
  gulp.watch(`${currentFolder}/*.css`, ['styles']);
});