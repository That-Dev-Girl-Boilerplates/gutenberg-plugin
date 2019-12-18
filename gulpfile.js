const gulp       = require( 'gulp' ),
      babel      = require( 'gulp-babel' )
      browserify = require( 'browserify' ),
      buffer     = require( 'vinyl-buffer' ),
      clean      = require( 'gulp-clean-css' ),
      rename     = require( 'gulp-rename' ),
      sass       = require( 'gulp-sass' ),
      source     = require( 'vinyl-source-stream' ),
      uglify     = require( 'gulp-uglify' );

// Array of JS files, in order by dependency.
const jsFiles = [
  'PLUGIN/source/block/colors/index.js'
];

// JS build task.
gulp.task( 'js', () => {
  return browserify( { entries: jsFiles } )
    .transform( 'babelify', { presets: ['es2015', 'react'] } )
    .bundle()
    .pipe( source( 'PLUGIN.min.js' ) )
    .pipe( buffer() )
    .pipe( uglify() )
    .pipe( gulp.dest( 'PLUGIN/build' ) );
} );

// CSS build task.
gulp.task( 'css', () => {
  return gulp.src( 'PLUGIN/source/scss/PLUGIN.scss' )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( clean() )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( gulp.dest( 'PLUGIN/build' ) );
} );

// Default task.
gulp.task( 'default', gulp.series( 'js', 'css' ) );
