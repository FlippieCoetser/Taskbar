import { TemplateLoader } from "../lib/utilities/templateLoader.js";
await TemplateLoader.load("../lib/templates/Button.Pin.template.html");
await TemplateLoader.load("../lib/templates/Button.Minimize.template.html");
await TemplateLoader.load("../lib/templates/Button.Maximize.template.html");
await TemplateLoader.load("../lib/templates/Button.Restore.template.html");
await TemplateLoader.load("../lib/templates/Button.Close.template.html");
await TemplateLoader.load("../lib/templates/Taskbar.template.html");
console.log("Templates: Loaded");

import { Pin } from "@browser-modules/buttons";
import { Minimize } from "@browser-modules/buttons";
import { Maximize } from "@browser-modules/buttons";
import { Restore } from "@browser-modules/buttons";
import { Close } from "@browser-modules/buttons";
import { Taskbar } from "../lib/Taskbar.js";

customElements.define(Pin.tag, Pin);
customElements.define(Minimize.tag, Minimize);
customElements.define(Maximize.tag, Maximize);
customElements.define(Restore.tag, Restore);
customElements.define(Close.tag, Close);

customElements.define(Taskbar.tag, Taskbar);
console.log("Components: Defined");

window.taskbar = document.querySelector("task-bar");
console.log("Components: Loaded");
