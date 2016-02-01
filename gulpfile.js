/**
 * 组件安装
 * npm install gulp-util gulp-imagemin gulp-ruby-sass gulp-minify-css gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp-livereload tiny-lr --save-dev
 */

// 引入 gulp及组件
var gulp    = require('gulp'),                 //基础库
    minifycss = require('gulp-minify-css'),    //css压缩
    uglify  = require('gulp-uglify'),          //js压缩
    clean = require('gulp-clean'),             //清空文件夹
    connect = require('gulp-connect'),         //web服务
    watch = require('gulp-watch');             //文件监视

// 压缩css
gulp.task('cssmin', function () {
    var cssSrc = './src/css/*.css',
        cssDst = './dist/css';

    gulp.src(cssSrc)
    .pipe(minifycss())
    .pipe(gulp.dest(cssDst))
    .pipe(connect.reload());
});

// js处理
gulp.task('jsmin', function () {
    var jsSrc = './src/js/**/*.js',
        jsDst ='./dist/js';

    gulp.src(jsSrc)
        .pipe(uglify())
        .pipe(gulp.dest(jsDst))
        .pipe(connect.reload());
});

// 图片处理
gulp.task('images', function(){
    var imgSrc = './src/images/**/*',
        imgDst = './dist/images';
    gulp.src(imgSrc)
        .pipe(gulp.dest(imgDst))
        .pipe(connect.reload());
});

// 图片处理
gulp.task('html', function(){
    var htmlSrc = './src/*.html',
        htmlDst = './dist';
    gulp.src(htmlSrc)
        .pipe(gulp.dest(htmlDst))
        .pipe(connect.reload());
});

//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server({
    port: 80,
    host: 'gulp',
    livereload: true
  });
});

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js', './dist/images'], {read: false})
        .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('html','cssmin','jsmin','images','connect','watch');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){
    // 监听css
    gulp.watch('./src/css/*.css', function(){
        gulp.run('cssmin');
    });

    // 监听images
    gulp.watch('./src/images/**/*', function(){
        gulp.run('images');
    });

    // 监听js
    gulp.watch('./src/js/**/*.js', function(){
        gulp.run('jsmin');
    });

    // 监听js
    gulp.watch('./src/*.html', function(){
        gulp.run('html');
    });
});