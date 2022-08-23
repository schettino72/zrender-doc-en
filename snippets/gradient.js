import * as zrender from '@site/static/zrender.js';

function draw(zr) {

    var w = zr.getWidth();
    var h = zr.getHeight();

    var sun = new zrender.Circle({
        shape: {
            cx: 0,
            cy: 0,
            r: 50
        },
        style: {
            fill: '#FF904F'
        },
        position: [w / 2, h / 2]
    });
    zr.add(sun);

    var water = new zrender.Rect({
        shape: {
            cx: 0,
            cy: 0,
            width: w,
            height: h / 2
        },
        style: {
            fill: new zrender.RadialGradient(0.5, -0.1, 1, [
                {
                    offset: 0,
                    color: '#FFB166'
                },
                {
                    offset: 0.2,
                    color: '#D7C467'
                },
                {
                    offset: 1,
                    color: '#37B0FF'
                }
            ])
        },
        position: [0, h / 2]
    });
    zr.add(water);

    var sky = new zrender.Rect({
        shape: {
            cx: 0,
            cy: 0,
            width: w,
            height: h
        },
        style: {
            fill: '#D7F9FF'
        },
        zlevel: -1
    });
    zr.add(sky);
}

export default draw;