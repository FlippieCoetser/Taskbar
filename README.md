# Taskbar

Component Template

```typescript
/**
* @module Taskbar
*/

import { Component } from "@browser-modules/web.component";

/**  
* @category Components
*/
export class Taskbar extends Component {}
```

HTML Template 

```html
<template id='task-bar'>
    <link rel="stylesheet" href="../lib/css/Taskbar.style.css">
    <div class='bar'>
        <button-pin></button-pin>
        <button-minimize></button-minimize>
        <button-restore></button-restore>
        <button-close></button-close>
    </div>       
</template>
```

Style Template

```css
/* Default Component Style */
:host {
    --border-color:rgba(150, 118, 202, 0.2);
    --border: 1px solid var(--border-color);
    --background: rgba(150, 118, 202, 0.2);
    --shadow-color:rgba(128, 0, 255, 0.2);
    --shadow: drop-shadow(1px 1px 1px var(--shadow-color));
    --size: 42px;
    --corners: 8px;
    position: absolute;
    background: var(--background);
    border-radius: 8px;
    border: var(--border);
    filter: var(--shadow);
    display: inline-block;
}

/* Child Components */
button-pin {
    width: var(--size);
    height: var(--size);
}

.space {
    display: inline-block;
    flex-grow: 1;
}

button-minimize {
    width: var(--size);
    height: var(--size);
}

button-restore {
    width: var(--size);
    height: var(--size);
}

button-close {
    width: var(--size);
    height: var(--size);
}
```

1. Add Templates
2. Define and Test Metadata
