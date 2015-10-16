import gulp from 'gulp'
import stylus from 'gulp-stylus'
import jade from 'gulp-jade'
import serve from 'gulp-serve'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer-stylus'
import rename from 'gulp-rename'
import cssgrace from 'cssgrace'
import cssnext from 'cssnext'
import nano from 'gulp-cssnano'

const time = Date.now()

gulp.task('serve', serve({
  root: '.',
  port: 3000
}))

const pres = [cssnext({
  browsers: [
    'ie > 7',
    'Firefox > 20',
    'Chrome > 37',
    'last 2 Safari versions',
    'last 2 Opera versions',
    '> 15% in CN'
  ]
}), cssgrace]

gulp.task('css', () => {
  gulp.src('./data-tip.styl')
    .pipe(stylus())
    .pipe(postcss(pres))
    .pipe(gulp.dest('./dist'))
    .pipe(nano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('jade', () => {
  gulp.src('./index.jade')
    .pipe(jade({
      locals: {
        time: time
      }
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', () => {
  gulp.watch('./data-tip.styl', ['css'])
  gulp.watch('./index.jade', ['jade'])
})

gulp.task('build', ['css', 'jade'])

gulp.task('default', ['build', 'watch', 'serve'])
