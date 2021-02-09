const { src, dest, watch, series, parallel } = require('gulp');
const useref = require('gulp-useref');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var compiler = require('webpack');
var webpack = require('webpack-stream');
const terser = require('gulp-terser');
var rename = require('gulp-rename');

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
		.pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
		.pipe(dest('dist/css/')) // put final CSS in dist folder
		.pipe(browserSync.stream());
}

function cssBuild() {
	return src(files.scssPath)
		.pipe(sourcemaps.init()) // initialize sourcemaps first
		.pipe(sass()) // compile SCSS to CSS
		.pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
		.pipe(rename('vast.min.css'))
		.pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
		.pipe(dest('dist/css/')) // put final CSS in dist folder
		.pipe(browserSync.stream());
}

function jsTask() {
	return src('src/js/**/*.js')
		.pipe(webpack(require('./webpack.dev.js')))
		.pipe(dest('dist/js/'))
		.pipe(browserSync.stream());
}

// JS task: concatenates and uglifies JS files to script.js
function jsBuild() {
	return src('dist/js/vast.js')
		.pipe(rename('vast.min.js'))
		.pipe(sourcemaps.init())
		.pipe(terser())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('dist/js'))
		.pipe(browserSync.stream());
}

// function htmlTask() {
// 	return src('src/*.html')
// 		.pipe(useref())
// 		.pipe(dest('dist'));
// }

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
	watch('dist/*.html', reload);
	watch('src/**/*.scss', series(scssTask, reload));
	watch('src/**/*.js', series(jsTask, reload));
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then watch task
exports.default = series(parallel(scssTask, jsTask), serve, watchTask);
exports.build = parallel(series(scssTask, jsTask), cssBuild, jsBuild);
