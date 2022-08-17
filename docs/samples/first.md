---
sidebar_position: 6
---

import * as zrender from '@site/static/zrender.js';

export class ZGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.$container = React.createRef();
    }
    componentDidMount() {
        var zr = zrender.init(this.$container.current);
        this.props.renderGraph(zrender, zr);
    }
    render() {
        return (
          <div>
            <pre>
            {this.props.renderGraph.toString()}
            </pre>
            <div className="content">
                <div ref={this.$container} className="example-container">
                </div>
            </div>
          </div>
        );
    }
}

export function simpleCircle(zrender, zr) {
    // https://v1.mdxjs.com/guides/live-code
    // https://docusaurus.io/docs/markdown-features/react#importing-code-snippets
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

<ZGraph renderGraph={simpleCircle}></ZGraph>


```javascript
    window.onload = function () {
      var container = document.getElementsByClassName('example-container')[0];
      var zr = zrender.init(container);

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
    };
```
