'use strict';


var path = require('path');
var gulp = require('gulp');
var fs = require("fs");
var conf = require('./conf');
var jeditor = require("gulp-json-editor");
var _ = require('underscore');
var gutil = require('gulp-util');

gulp.task('buttons', function(json) {

	gulp.src('./dist/buttons.json')
	.pipe(jeditor(function(json){
		json = [];

		var colours = ['black', 'blue', 'cerise', 'green', 'grey'];
		var styles = ['key', 'sol'];
		var shapes= ['circ', 'sq', 'rect', 'rnd'];
		var fonts = ['sans', 'serif'];
		var msgs = ['now', 'make', 'online'];

		_.each(colours, function(color){
			_.each(styles, function(style){
				_.each(shapes, function(shape){
					_.each(fonts, function(font){
						_.each(msgs, function(msg){
							json.push({
								colour: color,
								style: style,
								font: font,
								shape: shape,
								text: msg,
								value: color+'_'+style+'_'+font+'_'+shape+'_'+msg
							});
						})
					})
				})
			})
		})


		return json;
	}))
	.pipe(gulp.dest('./dist'));


});
