var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var tsProject = ts.createProject('tsconfig.json'); 

gulp.task('default', ['tsc', 'watch']);
 
gulp.task('tsc', function () {
	var tsResult = tsProject.src('src/**/*.ts')
		.pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('built/local'));
});

gulp.task('watch', function() {
   gulp.watch('src/**/*.ts', ['tsc']); 
});

