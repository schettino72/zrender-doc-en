---
sidebar_position: 1
---

[ZRender](https://github.com/ecomfe/zrender) is a two-dimensional drawing engine that can renders on Canvas, SVG, and VML. ZRender is the renderer of [ECharts](https://echarts.apache.org).


## Download / Installation

ZRender can be used as ES module or directly including the source on a `script` tag.

### HTML script tag

On GitHub: [https://github.com/ecomfe/zrender](https://github.com/ecomfe/zrender).

Find `zrender.js` and `zrender.min.js` in the `dist` directory, the former is the development version and the latter is the release version.

```html
<script src="./dist/zrender.js"></script>
```

Create an instance and attach to a DOM element:

```html
<div id="zrender-container" 
     style="height: 200px; max-width: 300px; border: 1px solid #eee;">
</div>
```

Make sure you set the `height` and `width` of the element.

```html
  <script>
    window.onload = function () {
      var container = document.getElementsById('zrender-container');
      var zr = zrender.init(container);
      // see usage below
    }
  </script>
```

See full source code of [vanilla js example](https://github.com/schettino72/zrender-doc-en/blob/main/samples/vanilla.html).


### ES Modules / NPM

`npm install zrender`

```
import * as zrender from 'zrender';
```

Example of a *react* component:

```js
import React from 'react';
import * as zrender from 'zrender';
import CanvasPainter from 'zrender/lib/canvas/Painter';

zrender.registerPainter('canvas', CanvasPainter);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.$container = React.createRef();
  }

  componentDidMount() {
    let zr = zrender.init(this.$container.current);
    this.renderGraph(zr);
  }

  render() {
    return (
        <div ref={this.$container} style={{width:300, height:300}}></div>
    );
  }

  renderGraph(zr) {
    // see usage below
  }
}
```

See full source code of [react example](https://github.com/schettino72/zrender-doc-en/blob/main/samples/react-app.js).


## Usage

### Adding elements

<!-- ZRender provides nearly 20 graphic types, which can be found under the documentation [zrender.Displayable](/api.html#zrenderdisplayable). -->

<!-- You can create other graphic types using [zrender.Path.extend](/api.html#zrenderpathextendprops) . -->

Add a circle：

```js
var circle = new zrender.Circle({
    shape: {
        cx: 150,
        cy: 50,
        r: 40
    },
    style: {
        fill: 'none',
        stroke: '#F00'
    }
});
zr.add(circle);
```

Creates a circle centered at `[150, 50]` with a radius of `40` pixels and adds it to the canvas.


### Properties

You can read attributes with a simple dot notation `elem.shape`.

But if you need to modify a property, you must use `elem.attr(key , value)`, otherwise the redraw of the graphics will not be triggered.


```js
var circle = new zrender.Circle({
    shape: {
        cx: 150,
        cy: 50,
        r: 40
    }
});
zr.add(circle);

console.log(circle.shape.r); // 40
circle.attr('shape', {
    r: 50 // Only updates .cx,cy are not modified.
});
```

See *API docs* for the zrender instance.
