import * as zrender from '@site/static/zrender.js';

function draw(zr) {
    var w = zr.getWidth();
    var h = zr.getHeight();

    var r = 30;
    var circle = new zrender.Circle({
        shape: {
            cx: r,
            cy: h / 2,
            r: r
        },
        style: {
            fill: 'transparent',
            stroke: '#FF6EBE'
        },
        silent: true
    });

    circle.animate('shape', true)
        .when(5000, {
            cx: w - r
        })
        .when(10000, {
            cx: r
        })
        .start();

    zr.add(circle);
}

export default draw;