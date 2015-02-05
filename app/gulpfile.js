var gulp = require('gulp');
gulp.task('browserify', function(){
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  return browserify(({entries: ['./index.js'], extensions: ['.jsx']}))
  .bundle()
  //Pass desired output filename to vinyl-source-stream
  .pipe(source('react-backbone.js'))
  .pipe(gulp.dest('./dist/'))
  .pipe(gulp.dest('./example/js'));
});

gulp.task('style', function() {
  var less = require('gulp-less');
  var concat = require('gulp-concat');
  gulp.src(['./app/styles/custom.less'])
    .pipe(less())
    .pipe(gulp.dest('./example/css'));
});



var browserSync = require('browser-sync');
var reload = browserSync.reload;
// Watch Files For Changes & Reload
gulp.task('serve', ['build'], function () {
  browserSync({
    notify: true,
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: ['example/']
    }
  });

  gulp.watch(['package.json','index.js','app/**/*.{json,js, coffee}'],['browserify',reload]);
  gulp.watch(['app/styles/**/*.less'], ['style', reload]);
  //gulp.watch(['app/scripts/**/*.js'], jshint);
  //gulp.watch(['app/images/**/*'], reload);
});

gulp.task('build', ['browserify', 'style']);
gulp.task('default', ['build']);
