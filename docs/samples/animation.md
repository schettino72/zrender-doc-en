---
sidebar_position: 6
---

Animation.

import ZGraph from '@site/src/components/ZGraph.js';

import draw from '@site/snippets/animation.js';
import srcDraw from '!!raw-loader!@site/snippets/animation.js';


<ZGraph 
    src={srcDraw} srcTrim={[3, 3]}
    renderGraph={draw}>
</ZGraph>