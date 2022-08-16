---
sidebar_position: 1
---

[ZRender](https://github.com/ecomfe/zrender) is a two-dimensional drawing engine that can renders on Canvas, SVG, and VML. ZRender is the renderer of [ECharts](https://echarts.apache.org).


## Download / Installation

Using NPM: `npm install zrender`.

On GitHub: [https://github.com/ecomfe/zrender](https://github.com/ecomfe/zrender).

Find `zrender.js` and `zrender.min.js` in the `dist` directory, the former is the development version and the latter is the release version.


## Usage

```html
<script src="./dist/zrender.js"></script>
```



## Initialization

Create an instance and attach to a DOM element:

```js
var zr = zrender.init(document.getElementById('main'));
```

See [API docs](/api.html#zrender-instance-api) for the zrender instance.



## Adding elements

ZRender provides nearly 20 graphic types, which can be found under the documentation [zrender.Displayable](/api.html#zrenderdisplayable).

You can create other graphic types using [zrender.Path.extend](/api.html#zrenderpathextendprops) .

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


## Properties

You can read attributes with a simple dot notation `elem.shape`.

But if you need to modify a property, you must use [`elem.attr(key , value)`](/api.html#zrenderelementattrkey-value), otherwise the redraw of the graphics will not be triggered.


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


Please refer to [documentation](/api.html) for more information.
