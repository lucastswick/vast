// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var compiler = require('webpack');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

// File paths
const files = {
	scssPath: 'src/styles/**/*.scss',
	jsPath: 'src/js/vast.js',
};

// Sass task: compiles the style.scss file into style.css
function scssTask() {
	return src(files.scssPath)
		.pipe(sourcemaps.init()) // initialize sourcemaps first
		.pipe(sass()) // compile SCSS to CSS
		.pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
		.pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
		.pipe(dest('dist/css/')) // put final CSS in dist folder
		.pipe(browserSync.stream());
}

// // JS task: concatenates and uglifies JS files to script.js
// function jsTask() {
// 	return src([files.jsPath])
// 		.pipe(sourcemaps.init())
// 		.pipe(terser())
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(dest('dist/js/'))
// 		.pipe(browserSync.stream());
// }

function jsTask() {
	return src('src/js/vast.js')
		.pipe(webpack(require('./webpack.dev.js')))
		.pipe(dest('dist/js/'));
}

function serve(cb) {
	browserSync.init({
		server: {
			baseDir: 'dist/',
		},
	});
	cb();
}

function reload(cb) {
	browserSync.reload();
	cb();
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
	watch('*.html', reload);
	watch('src/**/*.scss', series(scssTask, reload));
	watch('src/**/*.js', series(jsTask, reload));
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then watch task
exports.default = series(parallel(scssTask, jsTask), serve, watchTask);
// exports.default = series(scssTask, watchTask);
