---
sidebar_position: 6
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

import * as zrender from '@site/static/zrender.js';
export class MyComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'XXX',
        }
        this.$container = React.createRef();
    }
    componentDidMount() {
        var zr = zrender.init(this.$container.current);
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
        silent: true
      });
      zr.add(circle);
    }
    render() {
        return (
            <div className="content">
                <div ref={this.$container} className="example-container">
                </div>
            </div>
        );
    }
}

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

<MyComp>comp content</MyComp>


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
