(function() {

  'use strict';

  var gulp = require('gulp');
  var fs = require('fs');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //import
  fs.readdirSync('./build').map(function(file) {
    require('./build/' + file);
  });

}());
