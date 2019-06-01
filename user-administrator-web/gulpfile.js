var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var runSequence = require('run-sequence');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');


var config = require('./config');

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['develop'], function() {

  // Usado para hacer refresh del navegador
  //https://browsersync.io/docs/options
	browserSync.init(null, {
		proxy: config.uri + config.port,
        files: ["webapp/**/*.*"],
        open: 'false',
        port: 7000,
	});
});

// reinicia el servidor si hay cambios en los archivos
gulp.task('develop', function(callback) {

  var stream = nodemon(
    {
      script: 'app.js',
      ext: 'html js',
      ignore: [
        'node_modules/',
        'bower_components',
        'webapp/index.html'
      ],
      tasks: ['build']
    }
  );
  var started = false;
  stream
  .on('start', function () {
		if (!started) {
			callback();
			started = true;
		}
	})
  .on('crash', function() {
    console.error('Application has crashed!\n');
    stream.emit('restart', 10);  // restart the server in 10 seconds
  });
});

// Encargada de orquestar el resto de las tareas
gulp.task('build', function(callback){
  runSequence(
    'inject:bower-files',
    'inject:own-files',
    callback
  );
});

gulp.task('inject:bower-files', function(callback){

  var target = gulp.src(config.routeIndex);

  // Archivos desde bower
  var sourcesBower = gulp.src(
    bowerFiles({
        overrides: {
            bootstrap: {
                dependencies: {
                    jquery: "^3.3.1",
                    "popper.js": "^1.12.9"
                },
                main: [
                    './dist/js/bootstrap.js',
                    './dist/css/*.min.*',
                    './dist/fonts/*.*'
                ]
            }
        }
    }),
    {read: false}
  );

  //ruta donde se guardara el archivo generado
  return target
    // .pipe(inject(sourcesBower, { name: 'bower', relative: true }))
    .pipe(inject(sourcesBower, { name: 'bower' }))
    .pipe(gulp.dest(config.routeWebapp));
});

gulp.task('inject:own-files', function(callback){

  var target = gulp.src(config.routeIndex);

  // Archivos propios del proyecto
  var sources = gulp.src(config.sources,
    { read: false }
  );

  //ruta donde se guardara el archivo generado
  return target
    // .pipe(inject(sources, {relative: true}))
    .pipe(inject(sources))
    .pipe(gulp.dest(config.routeWebapp));
});
