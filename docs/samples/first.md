---
sidebar_position: 6
---

import ZGraph from '@site/src/components/ZGraph.js';

import simpleCircle from '@site/snippets/circle.js';
import srcCircle from '!!raw-loader!@site/snippets/circle.js';


<ZGraph 
    src={srcCircle} srcTrim={[3, 3]}
    renderGraph={simpleCircle}>
</ZGraph>