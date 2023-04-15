
import { Pin      } from '@browser-modules/button.pin'
import { Restore  } from '@browser-modules/button.restore'
import { Close    } from '@browser-modules/button.close'
import { Minimize } from '@browser-modules/button.minimize'

import { TemplateLoader } from '../lib/utilities/templateLoader.js'

await TemplateLoader.load("../lib/templates/Button.Pin.template.html")
await TemplateLoader.load("../lib/templates/Button.Restore.template.html")
await TemplateLoader.load("../lib/templates/Button.Close.template.html")
await TemplateLoader.load("../lib/templates/Button.Minimize.template.html")
console.log('templates: Loaded')

customElements.define(Pin.tag, Pin)
customElements.define(Restore.tag, Restore)
customElements.define(Close.tag, Close)
customElements.define(Minimize.tag, Minimize)

// Load Imperative Interface
window.pin = document.querySelector('button-pin')
window.restore = document.querySelector('button-restore')
window.close = document.querySelector('button-close')
window.minimize = document.querySelector('button-minimize')
console.log('Buttons: Loaded')