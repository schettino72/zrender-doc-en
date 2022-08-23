---
sidebar_position: 7
---

Text.

import ZGraph from '@site/src/components/ZGraph.js';

import draw from '@site/snippets/text.js';
import srcDraw from '!!raw-loader!@site/snippets/text.js';


<ZGraph 
    src={srcDraw} srcTrim={[3, 3]}
    renderGraph={draw}>
</ZGraph>