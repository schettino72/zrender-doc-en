import * as zrender from '@site/static/zrender.js';

function drawDraggableCircle(zr) {
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
        draggable: true,
    });

    circle.on('mousedown', function() {
        circle.attr('style', {
            fill: '#FF6EBE'
        });
    });
    circle.on('mouseup', function() {
        circle.attr('style', {
            fill: 'transparent'
        });
    });
    zr.add(circle);
}

export default drawDraggableCircle;