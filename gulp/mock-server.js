'use strict';

var gulp = require('gulp');
var conf = require('./conf');
var shell = require('gulp-shell');

gulp.task('mock-server', shell.task(['json-server -p 5000 -delay 2000 --routes '+conf.paths.mock+'/routes.json '+conf.paths.mock+'/gen.js']));
