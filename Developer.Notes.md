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

HTML Template with a reference to an external style sheet for easy customization

```html
<template id="task-bar">
  <link rel="stylesheet" href="../lib/css/Taskbar.style.css" />
  <div class="bar">
    <button-pin></button-pin>
    <button-minimize></button-minimize>
    <button-restore></button-restore>
    <button-close></button-close>
  </div>
</template>
```

Default Style Sheet

```css
/* Default Component Style */
:host {
  --border-color: rgba(150, 118, 202, 0.2);
  --border: 1px solid var(--border-color);
  --background: rgba(150, 118, 202, 0.2);
  --shadow-color: rgba(128, 0, 255, 0.2);
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

### Data Binding between Components

Data binding between parent: Taskbar, and child: Pin, Minimize, Maximize, Restore and Close is defined inside the `_render` function as show below:

```typescript
  protected _render = () => {
    let pin = this.root.querySelector("button-pin") as Pin;
    let minimize = this.root.querySelector("button-minimize") as Minimize;
    let maximize = this.root.querySelector("button-maximize") as Maximize;
    let restore = this.root.querySelector("button-restore") as Restore;
    let close = this.root.querySelector("button-close") as Close;

    // Imperative API Bindings
    this.onpin = () => pin.on();
    this.onunpin = () => pin.off();
    this.onrestore = () => restore.off();
    this.onmaximize = () => restore.on();

    // UI Gesture Bindings
    pin.onon = () => this.pin();
    pin.onoff = () => this.unpin();
    minimize.ondown = () => this.minimize();
    maximize.ondown = () => this.restore();
    restore.onon = () => this.maximize();
    restore.onoff = () => this.restore();
    close.ondown = () => this.close();
  };
```

TODO: The implement a safety check to ensure all child components have been loaded and is available to engage with. Below is a suggested approach to investigate:

When dealing with nested custom elements where each element has its own `connectedCallback`, you'll want to ensure that the child elements have completed their `connectedCallback` before accessing them in the parent.

To accomplish this, you can use the `window.customElements.whenDefined(name)` function inside the parent's `connectedCallback`. This function returns a promise that resolves when the specified custom element is defined.

## Example

```javascript
// child-element.js
class ChildElement extends HTMLElement {
  constructor() {
    super();
    this.textContent = "Child element content";
  }

  connectedCallback() {
    console.log("Child element connected");
  }
}

customElements.define("child-element", ChildElement);

// parent-element.js
class ParentElement extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    // Wait for the child element to be defined
    await customElements.whenDefined("child-element");

    // Access the child elements when they have completed their connectedCallback
    const childElement = this.querySelector("child-element");
    if (childElement) {
      console.log("Child element in parent:", childElement.textContent);
    } else {
      console.log("Child element not found in parent.");
    }
  }
}

customElements.define("parent-element", ParentElement);
```

```html
<parent-element>
  <child-element></child-element>
</parent-element>
```

In this example, the ParentElement uses customElements.whenDefined('child-element') inside its connectedCallback to wait for the ChildElement to be defined before accessing it. This ensures that the child element has completed its connectedCallback before the parent element tries to interact with it.

For general advice when dealing with nested custom elements and establishing bindings between parent and child elements, consider the following:

1. Use connectedCallback to set up bindings or interactions between parent and child elements.
2. Use window.customElements.whenDefined(name) to ensure the child element is defined and has completed its connectedCallback before interacting with it.
3. If the child elements can change dynamically, consider using a MutationObserver to watch for changes in the child elements and update bindings accordingly.
4. When setting up bindings, consider using custom events to communicate between parent and child elements. This can help decouple the components and make them more reusable.

#### Notes:

Unit Testing Framework: Wallaby, generate a html file including scripts which is used in a headless chrome browser by Karma Test Runner to run realtime test. The example below has importmaps injected before test are executed. Note: Importmaps is used to for direct module reference, NPM Packages are used

```html
<script>
  (function () {
    window.$_$receiverPort = 64596;
    window.$_$receiverHost = "127.0.0.1";
    window.$_$session = "2vzr5";
    window.$_$baseDir =
      "C:\\Users\\User\\.vscode\\extensions\\wallabyjs.wallaby-vscode-1.0.351\\projects\\76f73cab3fcd32b1\\instrumented\\";
    window.$_$initialSpecId = 300000;
    window.$_$reportUnhanledPromises = false;
    window.$_$throwOnBeforeunload = true;
    window.$_$maxLogEntrySize = undefined;
    window.$_$maxTraceSteps = undefined;
    window.$_$logLimits = {
      inline: { depth: 5, elements: 5000 },
      values: {
        default: { stringLength: 200 },
        autoExpand: { elements: 5000, stringLength: 8192, depth: 10 },
      },
    };
    window.$_$traceContext = false;
    window.$_$coverage = [];
    var file, i, len;
    file = window.$_$coverage[1] = [];
    for (i = 0, len = 9; i < len; i++) file[i] = {};
    file = window.$_$coverage[2] = [];
    for (i = 0, len = 55; i < len; i++) file[i] = {};
    file = window.$_$coverage[4] = [];
    for (i = 0, len = 56; i < len; i++) file[i] = {};
    file = window.$_$coverage[3] = [];
    for (i = 0, len = 28; i < len; i++) file[i] = {};
    file = window.$_$coverage[5] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[6] = [];
    for (i = 0, len = 4; i < len; i++) file[i] = {};
    file = window.$_$coverage[43] = [];
    for (i = 0, len = 8; i < len; i++) file[i] = {};
    file = window.$_$coverage[44] = [];
    for (i = 0, len = 63; i < len; i++) file[i] = {};
    file = window.$_$coverage[41] = [];
    for (i = 0, len = 96; i < len; i++) file[i] = {};
    file = window.$_$coverage[36] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[48] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[51] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[52] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[37] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[53] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[45] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[35] = [];
    for (i = 0, len = 33; i < len; i++) file[i] = {};
    file = window.$_$coverage[9] = [];
    for (i = 0, len = 16; i < len; i++) file[i] = {};
    file = window.$_$coverage[10] = [];
    for (i = 0, len = 74; i < len; i++) file[i] = {};
    file = window.$_$coverage[11] = [];
    for (i = 0, len = 8; i < len; i++) file[i] = {};
    file = window.$_$coverage[12] = [];
    for (i = 0, len = 52; i < len; i++) file[i] = {};
    file = window.$_$coverage[13] = [];
    for (i = 0, len = 4; i < len; i++) file[i] = {};
    file = window.$_$coverage[14] = [];
    for (i = 0, len = 36; i < len; i++) file[i] = {};
    file = window.$_$coverage[15] = [];
    for (i = 0, len = 56; i < len; i++) file[i] = {};
    file = window.$_$coverage[16] = [];
    for (i = 0, len = 37; i < len; i++) file[i] = {};
    file = window.$_$coverage[38] = [];
    for (i = 0, len = 8; i < len; i++) file[i] = {};
    file = window.$_$coverage[39] = [];
    for (i = 0, len = 19; i < len; i++) file[i] = {};
    file = window.$_$coverage[17] = [];
    for (i = 0, len = 25; i < len; i++) file[i] = {};
    file = window.$_$coverage[18] = [];
    for (i = 0, len = 18; i < len; i++) file[i] = {};
    file = window.$_$coverage[19] = [];
    for (i = 0, len = 55; i < len; i++) file[i] = {};
    file = window.$_$coverage[20] = [];
    for (i = 0, len = 56; i < len; i++) file[i] = {};
    file = window.$_$coverage[21] = [];
    for (i = 0, len = 55; i < len; i++) file[i] = {};
    file = window.$_$coverage[22] = [];
    for (i = 0, len = 55; i < len; i++) file[i] = {};
    file = window.$_$coverage[23] = [];
    for (i = 0, len = 56; i < len; i++) file[i] = {};
    file = window.$_$coverage[24] = [];
    for (i = 0, len = 56; i < len; i++) file[i] = {};
    file = window.$_$coverage[25] = [];
    for (i = 0, len = 55; i < len; i++) file[i] = {};
    file = window.$_$coverage[26] = [];
    for (i = 0, len = 55; i < len; i++) file[i] = {};
    file = window.$_$coverage[28] = [];
    for (i = 0, len = 55; i < len; i++) file[i] = {};
    file = window.$_$coverage[29] = [];
    for (i = 0, len = 56; i < len; i++) file[i] = {};
    file = window.$_$coverage[31] = [];
    for (i = 0, len = 56; i < len; i++) file[i] = {};
    file = window.$_$coverage[32] = [];
    for (i = 0, len = 55; i < len; i++) file[i] = {};
    file = window.$_$coverage[34] = [];
    for (i = 0, len = 55; i < len; i++) file[i] = {};
    file = window.$_$coverage[27] = [];
    for (i = 0, len = 28; i < len; i++) file[i] = {};
    file = window.$_$coverage[30] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[33] = [];
    for (i = 0, len = 4; i < len; i++) file[i] = {};
    file = window.$_$coverage[40] = [];
    for (i = 0, len = 0; i < len; i++) file[i] = {};
    file = window.$_$coverage[46] = [];
    for (i = 0, len = 7; i < len; i++) file[i] = {};
    file = window.$_$coverage[7] = [];
    for (i = 0, len = 195; i < len; i++) file[i] = {};
    file = window.$_$coverage[8] = [];
    for (i = 0, len = 189; i < len; i++) file[i] = {};
    file = window.$_$coverage[42] = [];
    for (i = 0, len = 358; i < len; i++) file[i] = {};
    window.$_$logsSuppressions = undefined;
    window.$_$slow = 75;
    window.$_$expressionsToEvaluate = {
      "1,6,0": { "_s_.": {} },
      "1,7,0": { strLength: 1.7976931348623157e308, "_s_.": {} },
    };
    window.$_$files = {
      "importmap.js": { ts: 1681998785803, id: 1 },
      "src/Button.Close.js": { ts: 1681998830605, id: 2 },
      "src/Button.Close.ts": { ts: 1681994164712, id: 2 },
      "src/Button.Pin.js": { ts: 1681998830614, id: 4 },
      "src/Button.Pin.ts": { ts: 1681994164712, id: 4 },
      "src/Button.metadata.js": { ts: 1681998830618, id: 3 },
      "src/Button.metadata.ts": { ts: 1681994164712, id: 3 },
      "src/Button.push.config.js": { ts: 1681998830619, id: 5 },
      "src/Button.push.config.ts": { ts: 1681994164712, id: 5 },
      "src/Button.switch.config.js": { ts: 1681998830622, id: 6 },
      "src/Button.switch.config.ts": { ts: 1681994164712, id: 6 },
      "src/Taskbar.config.js": { ts: 1681998830631, id: 43 },
      "src/Taskbar.config.ts": { ts: 1681994164712, id: 43 },
      "src/Taskbar.js": { ts: 1681998830647, id: 41 },
      "src/Taskbar.metadata.js": { ts: 1681998830636, id: 44 },
      "src/Taskbar.metadata.ts": { ts: 1681994164712, id: 44 },
      "src/Taskbar.ts": { ts: 1681995498363, id: 41 },
      "src/templates/Button.Close.template.js": { ts: 1681998830649, id: 36 },
      "src/templates/Button.Close.template.ts": { ts: 1681994164714, id: 36 },
      "src/templates/Button.Fullscreen.template.js": {
        ts: 1681998830649,
        id: 48,
      },
      "src/templates/Button.Fullscreen.template.ts": {
        ts: 1681994164714,
        id: 48,
      },
      "src/templates/Button.Maximize.template.js": {
        ts: 1681998830650,
        id: 51,
      },
      "src/templates/Button.Maximize.template.ts": {
        ts: 1681994164714,
        id: 51,
      },
      "src/templates/Button.Minimize.template.js": {
        ts: 1681998830650,
        id: 52,
      },
      "src/templates/Button.Minimize.template.ts": {
        ts: 1681994164714,
        id: 52,
      },
      "src/templates/Button.Pin.template.js": { ts: 1681998830650, id: 37 },
      "src/templates/Button.Pin.template.ts": { ts: 1681994164714, id: 37 },
      "src/templates/Button.Restore.template.js": { ts: 1681998830651, id: 53 },
      "src/templates/Button.Restore.template.ts": { ts: 1681994164714, id: 53 },
      "src/templates/Taskbar.template.js": { ts: 1681998830651, id: 45 },
      "src/templates/Taskbar.template.ts": { ts: 1681994164714, id: 45 },
      "src/utilities/utilities.js": { ts: 1681998830653, id: 35 },
      "src/utilities/utilities.ts": { ts: 1681994164715, id: 35 },
      "node_modules/@browser-modules/dictionary/lib/dictionary.js": {
        ts: 1681994164713,
        id: 9,
      },
      "node_modules/@browser-modules/events/lib/events.js": {
        ts: 1681994164713,
        id: 10,
      },
      "node_modules/@browser-modules/machine/lib/bar.header.config.js": {
        ts: 1681994164712,
        id: 11,
      },
      "node_modules/@browser-modules/machine/lib/bar.header.metadata.js": {
        ts: 1681994164713,
        id: 12,
      },
      "node_modules/@browser-modules/machine/lib/button.pin.config.js": {
        ts: 1681994164713,
        id: 13,
      },
      "node_modules/@browser-modules/machine/lib/button.pin.metadata.js": {
        ts: 1681994164713,
        id: 14,
      },
      "node_modules/@browser-modules/machine/lib/machine.js": {
        ts: 1681994164713,
        id: 15,
      },
      "node_modules/@browser-modules/web.component/lib/component.js": {
        ts: 1681994164713,
        id: 16,
      },
      "node_modules/@browser-modules/web.component/lib/enums/enum.gesture.js": {
        ts: 1681994164715,
        id: 38,
      },
      "node_modules/@browser-modules/web.component/lib/enums/enum.tag.js": {
        ts: 1681994164715,
        id: 39,
      },
      "node_modules/@browser-modules/web.component/lib/template.js": {
        ts: 1681994164713,
        id: 17,
      },
      "node_modules/@browser-modules/web.component/lib/validation.js": {
        ts: 1681994164713,
        id: 18,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Close.js": {
        ts: 1681994164713,
        id: 19,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Contents.js": {
        ts: 1681994164713,
        id: 20,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Dots.js": {
        ts: 1681994164713,
        id: 21,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Down.js": {
        ts: 1681994164713,
        id: 22,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Fullscreen.js": {
        ts: 1681994164713,
        id: 23,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Hamburger.js": {
        ts: 1681994164713,
        id: 24,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Left.js": {
        ts: 1681994164714,
        id: 25,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Maximize.js": {
        ts: 1681994164714,
        id: 26,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Minimize.js": {
        ts: 1681994164714,
        id: 28,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Pin.js": {
        ts: 1681994164714,
        id: 29,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Restore.js": {
        ts: 1681994164714,
        id: 31,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Right.js": {
        ts: 1681994164714,
        id: 32,
      },
      "node_modules/@browser-modules/buttons/lib/Button.Up.js": {
        ts: 1681994164714,
        id: 34,
      },
      "node_modules/@browser-modules/buttons/lib/Button.metadata.js": {
        ts: 1681994164714,
        id: 27,
      },
      "node_modules/@browser-modules/buttons/lib/Button.push.config.js": {
        ts: 1681994164714,
        id: 30,
      },
      "node_modules/@browser-modules/buttons/lib/Button.switch.config.js": {
        ts: 1681994164714,
        id: 33,
      },
      "node_modules/@browser-modules/buttons/lib/Buttons.js": {
        ts: 1681994164714,
        id: 40,
      },
      "node_modules/@browser-modules/buttons/lib/utilities/templateLoader.js": {
        ts: 1681994164715,
        id: 46,
      },
      "test/Button.Close.test.js": { ts: 1681998830667, id: 7 },
      "test/Button.Close.test.ts": { ts: 1681994164712, id: 7 },
      "test/Button.Pin.test.js": { ts: 1681998830681, id: 8 },
      "test/Button.Pin.test.ts": { ts: 1681994164712, id: 8 },
      "test/Taskbar.test.js": { ts: 1681998830706, id: 42 },
      "test/Taskbar.test.ts": { ts: 1681997239773, id: 42 },
    };
    window.$_$tests = null;
    window.$_$testFiles = [
      { path: "test\\Button.Close.test.js", loaded: false, id: 7 },
      { path: "test\\Button.Pin.test.js", loaded: false, id: 8 },
      { path: "test\\Taskbar.test.js", loaded: true, id: 42 },
    ];
  })();
</script>
<script src="__wallaby__/tracer.js"></script>
<script src="__wallaby__/jasmine@3.10.0/framework.js"></script>
<script src="__wallaby__/jasmine@2.1.3/configurator.js"></script>
<script src="__wallaby__/jasmine@2.1.3/reporter.js"></script>
<script src="importmap.js?1681998785803&amp;wallabyFileId=1"></script>
<script type="importmap">
  {
    "imports": {
      "@browser-modules/dictionary": "./node_modules/@browser-modules/dictionary/lib/dictionary.js",
      "@browser-modules/events": "./node_modules/@browser-modules/events/lib/events.js",
      "@browser-modules/machine": "./node_modules/@browser-modules/machine/lib/machine.js",
      "@browser-modules/web.component": "./node_modules/@browser-modules/web.component/lib/component.js",
      "@browser-modules/buttons": "./node_modules/@browser-modules/buttons/lib/buttons.js"
    }
  }
</script>
```
