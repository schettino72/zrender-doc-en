---
sidebar_position: 5
---

Create a `group` of elements and draw corresponding bounding box.

import ZGraph from '@site/src/components/ZGraph.js';

import draw from '@site/snippets/bounding-box.js';
import srcDraw from '!!raw-loader!@site/snippets/bounding-box.js';


<ZGraph 
    src={srcDraw} srcTrim={[3, 3]}
    renderGraph={draw}>
</ZGraph>