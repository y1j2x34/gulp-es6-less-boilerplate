module.exports = function(){
    return function taskFn(){
        const gulp = require('gulp');
        const revReplace = require('gulp-rev-replace');
        const options = require('./gulp-options.json');
        console.info("xaasdsadasdsad");
        return gulp
            .src(options.indexHtmlPath)
            .pipe(revReplace({ manifest: gulp.src(options.manifest) }))
            .pipe(gulp.dest(options.dest));
    }
}