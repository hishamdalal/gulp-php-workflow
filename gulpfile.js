'use strict';

const { src, dest, watch, series } = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer')

const sass = require('gulp-sass')(require('sass'));
// import dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// const sass = gulpSass(dartSass);

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

const sourcemaps = require('gulp-sourcemaps');

// npm install -D gulp browserify babelify vinyl-buffer gulp-sass sass gulp-postcss cssnano gulp-terser browser-sync gulp-sourcemaps

function php() {
    return src('src/**/*.php')
        .pipe(dest('dist'))
}

function scss() {
    return src('src/scss/bundle.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(dest('dist', { sourceMaps: '.' }))
        .pipe(browserSync.stream());
}

function js() {
    return browserify('./src/js/bundle.js', { debug: true, sourceMaps: true })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(dest('dist', { sourceMaps: '.' }))
}


// BrowserSync Tasks
function browserSyncServe(cb) {
    browserSync.init({
        proxy: "http://localhost/workflow/Gulp/gulp-php-workflow/dist/",
        port: 3000,
        // server: {
        //    baseDir: ['dist'],
        // },
    });
    cb();
}
function browserSyncReload(cb) {
    browserSync.reload();
    cb();
}
function browserSyncStream(cb) {
    browserSync.stream();
    cb();
}

// Watch Task
function watchTask() {
    watch('src/*.php', series(php, browserSyncReload));
    // watch('src/scss/**/*.scss', series(scss, browserSyncStream))
    watch('src/scss/**/*.scss', series(scss, browserSyncReload))
    watch('src/js/**/*.js', series(js, browserSyncReload))
}

exports.default = series(
    php,
    scss,
    js,
    browserSyncServe,
    watchTask
);

exports.css = scss;
exports.js = js;
exports.php = php;
