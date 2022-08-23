import * as zrender from '@site/static/zrender.js';

function draw(zr) {
    var w = zr.getWidth();
    var h = zr.getHeight();

    var t1 = new zrender.Text({
        style: {
            text: 'zrender',
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fontSize: 40,
            fontFamily: 'Lato',
            fontWeight: 'bolder',
            fill: '#0ff', // textFill - FIXME: textFill not working
            // blend: 'lighten'
        },
        position: [w / 2 + 5, h / 2]
    });
    zr.add(t1);
}

export default draw;