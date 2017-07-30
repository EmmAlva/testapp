const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
const addsrc = require('gulp-add-src');
const nodemon = require('gulp-nodemon');

const config = {
    source: "./src/",
    dist: "./public/"
};

const paths = {
    assets: "assets/",
    html: "**/*.html",
    sass: "scss/**/*.scss",
    js: "js/components/*.js",
    mainSass: "scss/main.scss",
    owl: 'js/owl.carousel.min.js',
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
    gulp.src([sources.fonts, sources.assets + 'fonts/CamingoDos-Pro/**.*']).pipe(gulp.dest(config.dist + paths.assets + 'fonts'));
});

gulp.task('img', () => {
    gulp.src(sources.assets + 'img/**.*').pipe(gulp.dest(config.dist + paths.assets + 'img'));
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
        .pipe(addsrc([sources.jquery, sources.materializeJS, sources.assets + paths.owl]))
        .pipe(gulp.dest(config.dist + paths.assets + 'js'));
});

gulp.task('sass-watch', ['sass'], (done) => {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ["js"],(done) => {
    browserSync.reload();
    done();
});

gulp.task('html-watch', ["html"], (done) => {
    browserSync.reload();
    done();
});


gulp.task('serve', ['browser-sync'], () => {
    gulp.watch(sources.html, ["html-watch"]);
    gulp.watch(sources.sass, ["sass-watch"]);
    gulp.watch(sources.js, ["js-watch"]);
    gulp.watch(sources.rootJS, ["js-watch"]);
});

gulp.task('browser-sync', ['nodemon'], () => {
    browserSync.init({
        port: 3007,
        proxy: {
            target: 'localhost:3000',
            ws: true
        }
    });
});

gulp.task('nodemon', (cb) => {

    let started = false;

    return nodemon({
        script: 'server.js'
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('run', ['html', 'js', 'sass', 'fonts', 'img', "serve"]);
