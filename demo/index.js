import { TemplateLoader } from '../lib/utilities/templateLoader.js'
await TemplateLoader.load("../lib/templates/Button.Pin.template.html")
await TemplateLoader.load("../lib/templates/Button.Minimize.template.html")
await TemplateLoader.load("../lib/templates/Button.Restore.template.html")
await TemplateLoader.load("../lib/templates/Button.Close.template.html")
await TemplateLoader.load("../lib/templates/Taskbar.template.html")
console.log('templates: Loaded')

import { Pin      } from '@browser-modules/button.pin'
import { Restore  } from '@browser-modules/button.restore'
import { Close    } from '@browser-modules/button.close'
import { Minimize } from '@browser-modules/button.minimize'
import { Taskbar  } from '../lib/Taskbar.js'

customElements.define(Pin.tag, Pin)
customElements.define(Restore.tag, Restore)
customElements.define(Close.tag, Close)
customElements.define(Minimize.tag, Minimize)
customElements.define(Taskbar.tag, Taskbar)

window.pin = document.querySelector('button-pin')
window.restore = document.querySelector('button-restore')
window.close = document.querySelector('button-close')
window.minimize = document.querySelector('button-minimize')
window.taskbar = document.querySelector('task-bar')
console.log('Buttons: Loaded')