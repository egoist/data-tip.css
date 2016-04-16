**Notice:** [hint.css](http://kushagragour.in/lab/hint/) has been much better since I complained about it months ago, so try out its new features instead of this one!

<img src="http://r5.loli.io/aiYVJb.png" align="right" width="100">

# data-tip.css

Wow, such tooltip, with pure css!

## Install

CDN: https://npmcdn.com/data-tip@latest

```bash
bower install data-tip
npm install data-tip

# additionally for Stylus lovers
# you can import data-tip.styl directly
@import '/path/to/data-tip'
```

## Usage

Simply write like this in your HTML:

```html
<button class="data-tip-bottom" data-tip="Tips To Show">
  My Custom Button
</button>
```

Position your tip:

```html
data-tip-top
data-tip-bottom
data-tip-left
data-tip-right
```

Colorful your tip:

```html
data-tip-success
data-tip-warning
data-tip-danger
data-tip-info
```

Anti-animation:

```html
data-tip-no-animation
```

Rounded border:

```html
data-tip-rounded
```

Fast mode:

```html
data-tip-fast
```

Box with shadow:

```html
data-tip-shadow
```

Always visible:

```html
data-tip-visible
```

## Development

Update `data-tip.styl` to change styles

|command|description|
|---|---|
|npm install|install dependencies for dev|
|npm run build|build html and css files|
|npm run dev|build and watch file changes|

## Browser Support

Currently it works on IE 8+ and most modern browsers. It uses `autoprefixer` so just modify `gulpfile.babel.js` to suit your need.

## License

MIT.
