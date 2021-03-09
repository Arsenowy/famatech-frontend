const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

////// image min
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
gulp.task('imagemin', function () {
  return gulp.src('./src/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./src/images'));
});
/////
// compile scss into css

function style() {
    //1 where is scss
    // all files
    // return gulp.src('./src/sass/**/*.scss')
    return gulp.src('./src/sass/styles.scss')
        .pipe(sourcemaps.init())
        //2 pass that file through sass compiler
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        //3 build sorce maps
        .pipe(sourcemaps.write('.'))
        //4 where do i save the complied css?
        .pipe(gulp.dest('./css/'))
        //5 stream changed to all browsers
        .pipe(browserSync.stream())

}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/sass/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;