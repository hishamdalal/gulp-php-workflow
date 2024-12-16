'use strict';

import { src, dest, watch, series } from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

// const sass = require('gulp-sass')(require('sass'));
// import dartSass from 'sass';
// import gulpSass from 'gulp-sass';
// const sass = gulpSass(dartSass);
// import * as sass from 'sass';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import terser from 'gulp-terser';
import browser_sync from 'browser-sync';
const browserSync = browser_sync.create();
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';

// npm install -D gulp browserify babelify vinyl-source-stream vinyl-buffer gulp-sass sass gulp-postcss cssnano gulp-terser browser-sync gulp-sourcemaps gulp-imagemin 

function php() {
    return src('src/**/*.php')
        .pipe(dest('dist'))
}

function scss() {
    return src('src/scss/bundle.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            // https://github.com/twbs/bootstrap/issues/40621#issuecomment-2470300522
            silenceDeprecations: ['legacy-js-api', 'mixed-decls', 'color-functions', 'global-builtin', 'import'],
        }).on('error', sass.logError))
        .pipe(postcss([cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(dest('dist/assets', { sourceMaps: '.' }))
        .pipe(browserSync.stream());
}

function js() {
    return browserify('./src/js/bundle.js', { debug: true, sourceMaps: true })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(terser())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(dest('dist/assets', { sourceMaps: '.' }))
}

function img() {
        return src('src/img/*', { encoding: false })
            .pipe(imagemin({
                verbose: true
              }))
            .pipe(dest('dist/assets/img'))
            .pipe(browserSync.stream());
}

function icons() {
    return src('src/vendors/fontello/**', { encoding: false })
        .pipe(dest('dist/assets/vendors/fontello'))
        .pipe(browserSync.stream());
}
// BrowserSync Tasks
function browserSyncServe(cb) {
    browserSync.init({
        proxy: "http://localhost/workflow/Gulp/gulp5-php-workflow/dist/",
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
    watch('src/img/**', series(img, browserSyncReload))
    watch('src/vendors/**', series(icons, browserSyncReload))
}

export default series(
    php,
    scss,
    js,
    img,
    icons,
    browserSyncServe,
    watchTask
);

export const build = series(
    php,
    scss,
    js,
    img,
    icons
);

export const style = scss;
export const script = js;
export const file = php;
export const image = img;
export const fonticons = icons;
