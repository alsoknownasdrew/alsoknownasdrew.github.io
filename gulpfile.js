const { src, dest, parallel } = require("gulp");
const concat = require("gulp-concat");
const minifyCSS = require("gulp-csso");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

const config = {
    assetsDir: "./src/assets",
    sassSrc: "styles/**/*.scss",
    imgSrc: "img/*",
    buildDir: "./assets"
};

const styles = () => {
    return src([
        "./node_modules/normalize.css/normalize.css",
        config.assetsDir + "/" + config.sassSrc
    ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat("main.min.css"))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write("."))
        .pipe(dest(config.buildDir + "/css"));
};

const img = () => {
    return src(config.assetsDir + "/" + config.imgSrc).pipe(
        dest(config.buildDir + "/img")
    );
};

exports.styles = styles;
exports.img = img;
exports.default = parallel(styles, img);
