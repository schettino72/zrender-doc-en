import React from 'react';
import * as zrender from '@site/static/zrender.js';

import CodeBlock from '@theme/CodeBlock';


export function trimLines(text, nStart, nEnd) {
    var lines = text.split('\n');
    // remove lines, starting at the beginning of file
    lines.splice(0, nStart);
    if (nEnd) {
        lines.splice(lines.length - nEnd, nEnd);
    }
    return lines.join('\n');
}
export default class ZGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.$container = React.createRef();
        if (this.props.srcTrim) {
            this.src = trimLines(this.props.src, this.props.srcTrim[0], this.props.srcTrim[1]);
        } else {
            this.src = this.props.src;
        }
        this.renderGraph = this.props.renderGraph;
    }
    componentDidMount() {
        // TODO: replace raw-loader on webpack 5.
        // https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
        // needs to wait for docusaurus ESM? https://github.com/facebook/docusaurus/issues/6520
        // if (this.props.snippet) {
        //   let draw = await import(this.props.snippet);
        //   this.renderGraph = draw;
        // }
        var zr = zrender.init(this.$container.current);
        this.renderGraph(zr);
    }
    render() {
        return (
            <div>
                <CodeBlock language="js">
                    {this.src}
                </CodeBlock>
                <div ref={this.$container} className="zcanvas-container">
                </div>
            </div>
        );
    }
}
