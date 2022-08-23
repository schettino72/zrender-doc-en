---
sidebar_position: 3
---

Use `clippath` to limit the rendered element to its intersection with another element. 

import ZGraph from '@site/src/components/ZGraph.js';

import draw from '@site/snippets/clippath.js';
import srcDraw from '!!raw-loader!@site/snippets/clippath.js';


<ZGraph 
    src={srcDraw} srcTrim={[3, 3]}
    renderGraph={draw}>
</ZGraph>