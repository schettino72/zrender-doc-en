---
sidebar_position: 4
---

Apply gradient to element `fill`.

import ZGraph from '@site/src/components/ZGraph.js';

import draw from '@site/snippets/gradient.js';
import srcDraw from '!!raw-loader!@site/snippets/gradient.js';


<ZGraph 
    src={srcDraw} srcTrim={[3, 3]}
    renderGraph={draw}>
</ZGraph>