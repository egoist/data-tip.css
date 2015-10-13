import gulp from 'gulp'
import stylus from 'gulp-stylus'
import jade from 'gulp-jade'
import serve from 'gulp-serve'
import nib from 'nib'
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
      use: [nib()],
      import: ['nib']
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
