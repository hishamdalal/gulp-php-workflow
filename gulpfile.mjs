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
import litePreset from 'cssnano-preset-lite';
import terser from 'gulp-terser';
import browser_sync from 'browser-sync';
const browserSync = browser_sync.create();
import sourcemaps from 'gulp-sourcemaps';
// import imagemin from 'gulp-imagemin';
import imagemin from 'gulp-image';
import autoprefixer from 'autoprefixer';

const preset = litePreset({ colormin: false });

// npm install -D gulp browserify babelify vinyl-source-stream vinyl-buffer gulp-sass sass gulp-postcss cssnano gulp-terser browser-sync gulp-sourcemaps gulp-imagemin autoprefixer

const path = {
    src: {
        php: 'src/**/*.php',
        style: 'src/assets/scss/bundle.scss',
        script: 'src/assets/js/bundle.js',
        imgs: 'src/assets/img/**/*',
        fonts: 'src/assets/vendors/fontello/font/**',
    },
    dist: {
        php: 'dist',
        style: 'dist/assets',
        script: 'src/assets',
        imgs: 'src/assets',
        fonts: 'dist/assets/vendors/fontello/font',
    },
    url: 'http://localhost/workflow/Gulp/gulp-php-workflow/dist/',
    watch: {
        php: 'src/*.php',
        style: 'src/scss/**/*.scss',
        script: 'src/js/**/*.js',
        imgs: 'src/img/**/*.*',
        vendors: {
            style:'src/vendors/**/*.scss',
            script: 'src/vendors/**/*.js',
        }
    }
};


function php() {
    return src(path.src.php)
        .pipe(dest(path.dist.php))
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
        .pipe(sourcemaps.write())
        .pipe(dest(path.dist.style, { sourceMaps: '.' }))
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
        .pipe(sourcemaps.write())
        .pipe(dest(path.dist.script, { sourceMaps: '.' }))
}

function img() {
        return src(path.src.imgs, { encoding: false })
            .pipe(imagemin())
            .pipe(dest(path.dist.imgs))
            .pipe(browserSync.stream());
}

function fonts() {
    return src(path.src.fonts, { encoding: false })
        .pipe(dest(path.dist.fonts))
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
