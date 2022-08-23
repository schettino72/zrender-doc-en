import * as zrender from '@site/static/zrender.js';

function draw(zr) {
    var w = zr.getWidth();
    var h = zr.getHeight();

    var circleShape = {
        cx: w / 2,
        cy: h / 2,
        r: 50
    };
    var circle = new zrender.Circle({
        shape: circleShape, 
        style: {
            fill: '#FF6EBE',
        },
    });
    var circleBorder = new zrender.Circle({
        shape: circleShape,
        style: {
            fill: 'transparent',
            stroke: '#5ACFFF'
        },
    });
    zr.add(circleBorder);

    var heartShape = {
        cx: w / 2 + 20,
        cy: h / 2 - 40,
        width: 60,
        height: 80
    };
    var heart = new zrender.Heart({
        shape: heartShape,
    });

    var heartBorder = new zrender.Heart({
        shape: heartShape,
        style: {
            fill: 'transparent',
            stroke: '#5ACFFF'
        },
    });

    circle.setClipPath(heart);
    zr.add(circle);
    zr.add(circleBorder);
    zr.add(heartBorder);
}

export default draw;