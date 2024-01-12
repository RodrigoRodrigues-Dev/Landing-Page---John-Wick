const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    gulp.src('./src/styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}


exports.default = gulp.parallel(styles);
exports.watch = () => {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false} , gulp.parallel(styles));
}