import * as zrender from '@site/static/zrender.js';

function draw(zr) {
    var w = zr.getWidth();
    var h = zr.getHeight();

    var isMouseDown = false;

    var elementStyle = {
        stroke: '#ccc',
        fill: 'white'
    };

    var group = new zrender.Group();
    function updateBox(group) {
        var rect = group.getBoundingRect();
        boundingRect.setShape({
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
        });
    }

    zr.on('mousedown', function () {
        isMouseDown = true;
    });
    zr.on('mouseup', function () {
        isMouseDown = false;
        updateBox(group);
    });

    for (var i = 0; i < 4; ++i) {
        var r = 10 * Math.random() + 20;
        var circle = new zrender.Circle({
            shape: {
                cx: 0,
                cy: 0,
                r: r
            },
            position: [
                (w * 0.6 - r * 2) * Math.random() + r + w * 0.2,
                (h * 0.6 - r * 2) * Math.random() + r + h * 0.2
            ],
            style: elementStyle,
            draggable: true
        });
        circle.on('mousemove', function () {
            if (isMouseDown) {
                updateBox(group);
            }
        });
        group.add(circle);
    }
    zr.add(group);

    var rect = group.getBoundingRect();
    var boundingRect = new zrender.Rect({
        shape: {
            cx: 0,
            cy: 0,
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
        },
        style: {
            fill: 'none',
            stroke: '#14f1ff'
        }
    });
    zr.add(boundingRect);
}

export default draw;