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
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import litePreset from 'cssnano-preset-lite';
import terser from 'gulp-terser';
import browser_sync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
// import imagemin from 'gulp-imagemin';
import imagemin from 'gulp-image';
import autoprefixer from 'autoprefixer';

const sass = gulpSass(dartSass);
const preset = litePreset({ colormin: false });
const browserSync = browser_sync.create();


// npm install -D gulp browserify babelify vinyl-source-stream vinyl-buffer gulp-sass sass gulp-postcss cssnano gulp-terser browser-sync gulp-sourcemaps gulp-imagemin autoprefixer

const path = {
    src: {
        php: 'src/**/*.php',
        style: 'src/assets/scss/bundle.scss',
        script: 'src/assets/js/bundle.js',
        imgs: 'src/assets/img/**/*',
        fonts: 'src/assets/vendors/fontello/font/**',
    },
    dest: {
        php: 'dist',
        style: 'dist/assets',
        script: 'dist/assets',
        imgs: 'dist/assets/img',
        fonts: 'dist/assets/vendors/fontello/font',
    },
    url: 'http://localhost/workflow/Gulp/gulp-php-workflow/dist/',
    watch: {
        php: 'src/**/*.php',
        style: 'src/assets/scss/**/*.scss',
        script: 'src/assets/js/**/*.js',
        imgs: 'src/assets/img/**/*.*',
        vendors: {
            style:'src/assets/vendors/**/*.scss',
            script: 'src/assets/vendors/**/*.js',
        }
    }
};


function php() {
    return src(path.src.php)
        .pipe(dest(path.dest.php))
}

function scss() {
    return src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            // https://github.com/twbs/bootstrap/issues/40621#issuecomment-2470300522
            silenceDeprecations: ['legacy-js-api', 'mixed-decls', 'color-functions', 'global-builtin', 'import'],
        }).on('error', sass.logError))
        .pipe(postcss([cssnano({ preset, plugins: [autoprefixer] })]))
        .pipe(sourcemaps.write('maps'))
        .pipe(dest(path.dest.style, { sourceMaps: '.' }))
        .pipe(browserSync.stream());
}

function js() {
    return browserify(path.src.script, { debug: true, sourceMaps: true })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(terser())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('maps'))
        .pipe(dest(path.dest.script, { sourceMaps: '.' }))
}

function img() {
        return src(path.src.imgs, { encoding: false })
            .pipe(imagemin())
            .pipe(dest(path.dest.imgs))
            .pipe(browserSync.stream());
}

function fonts() {
    return src(path.src.fonts, { encoding: false })
        .pipe(dest(path.dest.fonts))
        .pipe(browserSync.stream());
}
// BrowserSync Tasks
function browserSyncServe(cb) {
    browserSync.init({
        proxy: path.url,
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
    watch(path.watch.php, series(php, browserSyncReload));
    watch(path.watch.style, series(scss, browserSyncReload))
    watch(path.watch.script, series(js, browserSyncReload))
    watch(path.watch.imgs, series(img, browserSyncReload))
    watch(path.watch.vendors.style, series(scss, browserSyncReload))
    watch(path.watch.vendors.script, series(js, browserSyncReload))
}

export default series(
    php,
    scss,
    js,
    img,
    fonts,
    browserSyncServe,
    watchTask
);

export const build = series(
    php,
    scss,
    js,
    img,
    fonts
);

export const style = scss;
export const script = js;
export const file = php;
export const image = img;
export const font = fonts;
