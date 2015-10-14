import gulp from 'gulp'
import stylus from 'gulp-stylus'
import jade from 'gulp-jade'
import serve from 'gulp-serve'
import autoprefixer from 'autoprefixer-stylus'
import min from 'gulp-cssmin'
import rename from 'gulp-rename'

const time = Date.now()

gulp.task('serve', serve({
  root: '.',
  port: 3000
}))

gulp.task('css', () => {
  gulp.src('./data-tip.styl')
    .pipe(stylus({
      use: [autoprefixer({
        browsers: [
          'ie > 7',
          'Firefox > 20',
          'last 2 Chrome versions',
          'last 2 Safari versions',
          'last 2 Opera versions',
          '> 15% in CN'
        ]
      })]
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(min())
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
