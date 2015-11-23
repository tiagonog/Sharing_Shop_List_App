var gulp = require('gulp');
var ts = require('gulp-typescript');
var rimraf = require('gulp-rimraf');
var nodemon = require('gulp-nodemon');
var sourcemaps = require('gulp-sourcemaps');
var tsb = require('gulp-tsb');

var paths = {
	all: {
		src: ['src/**/*']
	},
  tscripts : {
		src : ['src/**/*.ts'],
    dest : 'build'
	}
};

var compilation = tsb.create({
        target: 'ES5',
        module: 'commonjs',
        sourceMap: true,
        outDir: "build",
        rootDir: "src"
    });
 
gulp.task('cleanBuiltDir', function(){
   return gulp.src(paths.tscripts.dest).pipe(rimraf());
}); 
 
gulp.task('build',['cleanBuiltDir'],  function () {
 return gulp.src(paths.tscripts.src)
    .pipe(compilation())
    .pipe(gulp.dest(paths.tscripts.dest));
});

// gulp.task('copyjs', function() {
// 	return gulp.src(paths.jscripts.src)
// 		.pipe(gulp.dest(paths.jscripts.dest));
// });
 
// gulp.task('buildFrontEnd', ['cleanBuiltDir'],  function () {
//   var tsResult = gulp.src('views/**/*.ts')
//     .pipe(ts({
//         module: 'CommonJS',
        
//       }));
//   return tsResult.js.pipe(gulp.dest('dist/'));
// });
 
gulp.task('nodemon', ['build','watch'], function(){
    nodemon({
        script: 'app.js'
    }).on('restart', function(){
        console.log('nodemon restarted app.js');
    })
})
 
gulp.task('watch', function() {
  gulp.watch(paths.tscripts.src, ['build']);
});
 
gulp.task('default', ['build']);