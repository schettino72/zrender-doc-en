---
sidebar_position: 6
---

import * as zrender from '@site/static/zrender.js';
import CodeBlock from '@theme/CodeBlock';

export class ZGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.$container = React.createRef();
    }
    componentDidMount() {
        var zr = zrender.init(this.$container.current);
        this.props.renderGraph(zr);
    }
    render() {
        return (
          <div>
            <CodeBlock language="js">
              {this.props.src}
            </CodeBlock>
            <div className="content">
              <div ref={this.$container} className="example-container">
              </div>
            </div>
          </div>
        );
    }
}

export function trimLines(text, nStart, nEnd) {
    var lines = text.split('\n');
    // remove lines, starting at the beginning of file
    lines.splice(0, nStart);
    if (nEnd) {
      lines.splice(lines.length - nEnd, nEnd);
    }
    return lines.join('\n');
}

<!-- TODO: replace raw-loader on webpack 5 -->
<!-- https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax -->
import simpleCircle from '@site/snippets/circle.js';
import srcCircle from '!!raw-loader!@site/snippets/circle.js';


<ZGraph 
    src={trimLines(srcCircle, 3, 3)}
    renderGraph={simpleCircle}>
</ZGraph>