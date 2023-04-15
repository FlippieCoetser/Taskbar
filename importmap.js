const importmap = {
    imports: {
        "@browser-modules/dictionary":
            "./node_modules/@browser-modules/dictionary/lib/dictionary.js",
        "@browser-modules/events":
            "./node_modules/@browser-modules/events/lib/events.js",
        "@browser-modules/machine":
            "./node_modules/@browser-modules/machine/lib/machine.js", 
        "@browser-modules/web.component":
            "./node_modules/@browser-modules/web.component/lib/component.js",
        "@browser-modules/button.pin":
            "./node_modules/@browser-modules/buttons/lib/Button.Pin.js",
        "@browser-modules/button.minimize":
            "./node_modules/@browser-modules/buttons/lib/Button.Minimize.js",
        "@browser-modules/button.restore":
            "./node_modules/@browser-modules/buttons/lib/Button.Restore.js",
        "@browser-modules/button.close":
            "./node_modules/@browser-modules/buttons/lib/Button.Close.js"
    },
};

const injectImportmap = (importmap) => {
    const element = document.createElement("script");
    element.type = "importmap";
    element.textContent = JSON.stringify(importmap);
    document.currentScript.after(element);
}

injectImportmap(importmap)