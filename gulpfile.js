var gulp = require('gulp');
var less = require('gulp-less'); //变异less
var browserSyns = require("browser-sync");
var mock = require("./src/mock/lyk.js");
gulp.task("less", function() {
    gulp.src("./src/static/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("./src/static/css"))
})
gulp.task('server', function() {
    browserSyns.init({
        server: {
            baseDir: "./src",
            index: "page/index.html"
        },
        files: ["src"],
        port: 8888,
        host: "localhost",
        middleware: function(req, res, next) {
            if (/\/api/g.test(req.url)) {
                res.end(JSON.stringify(
                    mock(req.url)
                ))
            }
            next();
        }
    })
})
gulp.task("watch", function() {
    gulp.watch("./src/static/less/*.less", ["less"])
})
gulp.task("default", ["less", "server", "watch"])