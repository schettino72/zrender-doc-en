import * as zrender from '@site/static/zrender.js';

function drawCircle(zr) {
    var circle = new zrender.Circle({
        shape: {
            cx: zr.getWidth() / 2,
            cy: zr.getHeight() / 2,
            r: 30
        },
        style: {
            fill: 'transparent',
            stroke: '#FF6EBE'
        },
    });
    zr.add(circle);
}

export default drawCircle;