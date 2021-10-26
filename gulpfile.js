const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));


function buildStyles() {
  return (
    src("Sass/**/*.scss")
      .pipe(sass({ outputStyle: "expanded" }))
      // .pipe(purgecss({ content: ["*.html"] }))
      .pipe(dest("css"))
  );
}

function watchTask() {
  watch(["Sass/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);