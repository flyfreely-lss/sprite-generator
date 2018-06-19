'use strict';

// 获取 gulp
var gulp = require('gulp'),
  // 模块化管理插件
  $ = require('gulp-load-plugins')(),
  // 雪碧图生成工具
  spritesmith = require('gulp.spritesmith'),
  // 获取执行 gulp 后续的参数
  args = require('get-gulp-args')(),
  // if 判断插件
  gulpif = require('gulp-if');

// 输入的第一个参数
var WATCH_SRC = args[0];

/*
* 雪碧图合并task( 输出到 css文件 )
* 参数1：执行目录；
* 参数2：生成的sass和图片的文件名；
* example：gulp sprite-css --scss --index_css_gulp
*/
gulp.task('sprite-css', function(){
  var DEST_NAME = args[1];
  return  gulp.src(`${WATCH_SRC}/**/*.png`)
    .pipe(spritesmith({
      imgName: DEST_NAME + '.png',
      cssName: DEST_NAME + '.css',
      imgPath: '../images/' + DEST_NAME + '.png'
    }))
    .pipe(gulpif('*.png', gulp.dest('images/')))
    .pipe(gulpif('*.css', gulp.dest('css/')));
});


// 压缩图片(jpg, gif格式)
// gulp.task('copy:images', function() {
//   return gulp.src(`${WATCH_SRC}/**/*.{jpg,gif}`)
//     .pipe($.imagemin())
//     .pipe(gulp.dest(`images`));
// });