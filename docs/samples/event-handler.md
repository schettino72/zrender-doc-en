---
sidebar_position: 2
---

Make Element draggable on canvas.
Change `fill` property on `mousedown` and `mouseup` events.

import ZGraph from '@site/src/components/ZGraph.js';

import handleMove from '@site/snippets/move.js';
import srcHandleMove from '!!raw-loader!@site/snippets/move.js';


<ZGraph 
    src={srcHandleMove} srcTrim={[3, 3]}
    renderGraph={handleMove}>
</ZGraph>