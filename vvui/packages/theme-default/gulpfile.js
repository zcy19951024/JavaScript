'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

// 定义一个使用Orchestrator实现的任务，名字叫compile
gulp.task('compile', function() {
  return gulp.src('./src/*.css')          // 读取css文件
    .pipe(postcss([salad]))               // 执行postcss，参数是
    .pipe(cssmin())                       // css压缩
    .pipe(gulp.dest('./lib'));            // 输出到./lib目录
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});


gulp.task('build', ['compile', 'copyfont']);
gulp.task('watch', function () {
  // 监视文件，在文件发生变动的时候执行compile
  gulp.watch('./src/*.css', ['compile']);
});

// 默认任务
gulp.task('default', ['build', 'watch'])
