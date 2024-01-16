const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

function scripts() {
    return gulp.src('./src/scripts/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(styles));
    gulp.watch('./src/scripts/main.js', {ignoreInitial: false}, gulp.parallel(scripts));
}
