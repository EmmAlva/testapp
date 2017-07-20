const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
const addsrc = require('gulp-add-src');

const config = {
    source: "./src/",
    dist: "./public/"
};

const paths = {
    assets: "assets/",
    html: "**/*.html",
    sass: "scss/**/*.scss",
    js: "js/**/*.js",
    mainSass: "scss/main.scss",
    mainJS: "js/app.js"
};

const sources = {
    assets: config.source + paths.assets,
    html: config.source + paths.html,
    sass: config.source + paths.assets + paths.sass,
    js: config.source + paths.assets + paths.js,
    jquery: './node_modules/jquery/dist/jquery.min.js',
    fonts: './node_modules/materialize-css/dist/fonts/**',
    materializeJS: './node_modules/materialize-css/dist/js/materialize.min.js',
    rootSass: config.source + paths.assets + paths.mainSass,
    rootJS: config.source + paths.assets + paths.mainJS
};

gulp.task('fonts', () => {
    gulp.src(sources.fonts).pipe(gulp.dest(config.dist + paths.assets + 'fonts'));
});

gulp.task('html', () => {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('sass', () => {
    gulp.src(sources.rootSass)
        .pipe(sass().on('error', sass.logError)) //sass({outputStyle: "compressed"})
        .pipe(gulp.dest(config.dist + paths.assets + 'css'));
});

gulp.task('js', () => {
    gulp.src([sources.js, sources.rootJS])
        .pipe(concat('app.js'))
        .pipe(browserify()) //rename({suffix: '.min'})
        .pipe(rename('bundle.js'))
        .pipe(addsrc([sources.jquery, sources.materializeJS]))
        .pipe(gulp.dest(config.dist + paths.assets + 'js'));
});

gulp.task('sass-watch', ['sass'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ["js"], function (done) {
    browserSync.reload();
    done();
});

gulp.task('html-watch', ["html"], function (done) {
    browserSync.reload();
    done();
});

gulp.task('start', ['html', 'js', 'sass', 'fonts']);

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: config.dist
        }
    });

    gulp.watch(sources.html, ['html-watch']);
    gulp.watch(sources.sass, ['sass-watch']);
    gulp.watch(sources.js, ['js-watch']);
});