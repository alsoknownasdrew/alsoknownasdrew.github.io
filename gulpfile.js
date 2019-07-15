const { src, dest, parallel, watch } = require("gulp");
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

const watchFiles = () => {
    watch(config.assetsDir + "/" + config.sassSrc, styles);
};

exports.styles = styles;
exports.img = img;
exports.watch = watchFiles;
exports.default = parallel(styles, img);
