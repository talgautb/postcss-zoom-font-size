# PostCSS Zoom Font-Size [![Build Status][ci-img]][ci]

[PostCSS] plugin zoom you font-size in new CSS file (default 120%).

## Why?

Because of accessibility (a11y). Best way to use relative values for font-size but if you are not, use my plugin to add function of scale font-size on site.

Other a11y PostCSS plugins:

- [PostCSS High Contrast](https://github.com/admdh/postcss-high-contrast);

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/talgautb/postcss-zoom-font-size.svg
[ci]:      https://travis-ci.org/talgautb/postcss-zoom-font-size

## Example

```css
.bar {
    color: #000;
    font-size: inherit;
}

.foo {
    font-size: 10px;
}
```

```css
.foo {
    font-size: 12px;
}
```

## Usage

```js
postcss([ require('postcss-zoom-font-size')({ zoom: 120 }) ])
```

See [PostCSS] docs for examples for your environment.

### Appending to webpage

Using this plugin it's better to generate new version of css file with scale font-size. Than it is very easy to add/append new version css to a webpage using JavaScript.
JQuery example:

```
function appendZoomFsCSS(){
    var fs = '<link rel="stylesheet" href="/path/to/css/font-size.css" id="fscss"/>';

    if (!$('#highContrastCss').length){
        $('head').append(fs);
    } else {
        $('#fscss').remove();
    }
}

$('.js_zoom-fs').click(loadHighContrastCSS);
    appendZoomFsCSS();
}
```

## Options

#### zoom

Type: `number` (default: 120)

Use nubmer in percent to scale you font-size.

## License

MIT © [Talgat uspanov](http://www.gtalk.kz)
