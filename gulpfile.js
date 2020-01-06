var gulp = require('gulp');

gulp.task('test', function() {
  console.log('HelloWorld!');
});

var imagemin = require("gulp-imagemin");
var imageminPngquant = require("imagemin-pngquant");
var imageminMozjpeg = require("imagemin-mozjpeg");

var imageminOption = [
  imageminPngquant({ quality: '65-80' }),
  imageminMozjpeg({ quality: 85 }),
  imagemin.gifsicle({
    interlaced: false,
    optimizationLevel: 1,
    colors: 256
  }),
  imagemin.jpegtran(),
  imagemin.optipng(),
  imagemin.svgo()
];

gulp.task( 'imagemin', function() {
  return gulp
    .src( './img/*.{png,jpg,gif,svg}' )
    .pipe( imagemin( imageminOption ) )
    .pipe( gulp.dest( './img' ) );
});