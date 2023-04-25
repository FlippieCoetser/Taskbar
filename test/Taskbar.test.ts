// @category Metadata: Components
import { Tag } from "../node_modules/@browser-modules/component.library/lib/tag.js";
describe("Given Tag imported", () => {
  it("then Tag should be defined", () => {
    expect(Tag).toBeDefined();
  });
  it("then Tag.Taskbar should be defined", () => {
    expect(Tag.TASKBAR).toBeDefined();
  });
});

/**
 * @category Metadata: Attributes
 */
import { Attribute } from "../src/Taskbar.metadata.js";
describe("Given Attribute imported", () => {
  it("then Attribute should be defined", () => {
    expect(Attribute).toBeDefined();
  });
  it("then Attribute.TEMPLATE should be defined", () => {
    expect(Attribute.TEMPLATE).toBeDefined();
  });
  it("then Attribute.VISIBLE should be defined", () => {
    expect(Attribute.VISIBLE).toBeDefined();
  });
  it("then Attribute.STATE should be defined", () => {
    expect(Attribute.STATE).toBeDefined();
  });
  it("then Attribute.WINDOW should be defined", () => {
    expect(Attribute.WINDOW).toBeDefined();
  });
  it("then Attribute.ORIENTATION should be defined", () => {
    expect(Attribute.ORIENTATION).toBeDefined();
  });
});

/**
 * @category Metadata: State
 */
import { Visible } from "../src/Taskbar.metadata.js";
import { State } from "../src/Taskbar.metadata.js";
import { Window } from "../src/Taskbar.metadata.js";
import { Orientation } from "../src/Taskbar.metadata.js";
describe("Given Visible imported", () => {
  it("then Visible should be defined", () => {
    expect(Visible).toBeDefined();
  });
  it("then Visible.NO should be defined", () => {
    expect(Visible.NO).toBeDefined();
  });
  it("then Visible.YES should be defined", () => {
    expect(Visible.YES).toBeDefined();
  });
});
describe("Given State imported", () => {
  it("then State should be defined", () => {
    expect(State).toBeDefined();
  });
  it("then State.PINNED should be defined", () => {
    expect(State.PINNED).toBeDefined();
  });
  it("then State.UNPINNED should be defined", () => {
    expect(State.UNPINNED).toBeDefined();
  });
});
describe("Given Window imported", () => {
  it("then Window should be defined", () => {
    expect(Window).toBeDefined();
  });
  it("then Window.NORMAL should be defined", () => {
    expect(Window.NORMAL).toBeDefined();
  });
  it("then Window.MINIMIZED should be defined", () => {
    expect(Window.MINIMIZED).toBeDefined();
  });
  it("then Window.MAXIMIZED should be defined", () => {
    expect(Window.MAXIMIZED).toBeDefined();
  });
  it("then Window.CLOSED should be defined", () => {
    expect(Window.CLOSED).toBeDefined();
  });
});
describe("Given Orientation imported", () => {
  it("then Orientation should be defined", () => {
    expect(Orientation).toBeDefined();
  });
  it("then Orientation.HORIZONTAL should be defined", () => {
    expect(Orientation.HORIZONTAL).toBeDefined();
  });
  it("then Orientation.VERTICAL should be defined", () => {
    expect(Orientation.VERTICAL).toBeDefined();
  });
});

/**
 * @category Metadata: Behavior
 */
import { Event } from "../src/Taskbar.metadata.js";
describe("Given Event imported", () => {
  it("then Event should be defined", () => {
    expect(Event).toBeDefined();
  });
  it("then Event.ONPIN should be defined", () => {
    expect(Event.ONPIN).toBeDefined();
  });
  it("then Event.ONUNPIN should be defined", () => {
    expect(Event.ONUNPIN).toBeDefined();
  });
  it("then Event.ONMINIMIZE should be defined", () => {
    expect(Event.ONMINIMIZE).toBeDefined();
  });
  it("then Event.ONMAXIMIZE should be defined", () => {
    expect(Event.ONMAXIMIZE).toBeDefined();
  });
  it("then Event.ONRESTORE should be defined", () => {
    expect(Event.ONRESTORE).toBeDefined();
  });
});

/**
 * @category Metadata: Behavior
 */
import { Operation } from "../src/Taskbar.metadata.js";
describe("Given Operation imported", () => {
  it("then Operation should be defined", () => {
    expect(Operation).toBeDefined();
  });
  it("then Operation.PIN should be defined", () => {
    expect(Operation.PIN).toBeDefined();
  });
  it("then Operation.UNPIN should be defined", () => {
    expect(Operation.UNPIN).toBeDefined();
  });
  it("then Operation.MINIMIZE should be defined", () => {
    expect(Operation.MINIMIZE).toBeDefined();
  });
  it("then Operation.MAXIMIZE should be defined", () => {
    expect(Operation.MAXIMIZE).toBeDefined();
  });
  it("then Operation.RESTORE should be defined", () => {
    expect(Operation.RESTORE).toBeDefined();
  });
});

const templates = {
  pin: `
    <link rel="stylesheet" href="../lib/css/Button.Pin.style.css">
      <div class="icon">
        <svg 
          class="on"
          height="24px"
          width="24px"  
          viewBox="0 0 20 20" 
          fill="#212121">
          <path d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.896 7.60309L4.01834 8.75415C3.35177 9.02078 3.17498 9.88209 3.68262 10.3897L6.29289 13L3 16.2929V17H3.70711L7 13.7071L9.61027 16.3174C10.1179 16.825 10.9792 16.6482 11.2459 15.9817L12.3969 13.104L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L2.85355 2.14645ZM11.6276 12.3347L10.3174 15.6103L4.38973 9.68263L7.66531 8.3724L11.6276 12.3347ZM12.9565 10.7127C12.9294 10.7263 12.9026 10.7403 12.8761 10.7548L13.6202 11.4989L16.8622 9.87793C18.0832 9.26743 18.3473 7.64015 17.382 6.67486L13.3251 2.61804C12.3599 1.65275 10.7326 1.91683 10.1221 3.13783L8.5011 6.37977L9.24523 7.1239C9.25971 7.09739 9.27373 7.07059 9.28728 7.04349L11.0165 3.58504C11.3218 2.97454 12.1354 2.8425 12.618 3.32514L16.6749 7.38197C17.1575 7.86461 17.0255 8.67826 16.415 8.98351L12.9565 10.7127Z"/>
        </svg>
        <svg 
          class="off"
          height="24px"
          width="24px"  
          viewBox="0 0 20 20" 
          fill="#212121">
          <path d="M10.1221 3.13782C10.7326 1.91683 12.3599 1.65275 13.3251 2.61804L17.382 6.67486C18.3472 7.64015 18.0832 9.26743 16.8622 9.87793L13.4037 11.6072C13.0751 11.7715 12.8183 12.0506 12.6818 12.3917L11.2459 15.9817C10.9792 16.6482 10.1179 16.825 9.61027 16.3174L7 13.7071L3.70711 17H3V16.2929L6.29289 13L3.68262 10.3897C3.17498 9.88209 3.35177 9.02078 4.01834 8.75415L7.60829 7.31817C7.94939 7.18173 8.22855 6.92486 8.39285 6.59628L10.1221 3.13782ZM12.618 3.32514C12.1354 2.8425 11.3217 2.97454 11.0165 3.58504L9.28727 7.04349C9.01345 7.59113 8.54818 8.01925 7.97968 8.24665L4.38973 9.68263L10.3174 15.6103L11.7534 12.0203C11.9808 11.4518 12.4089 10.9866 12.9565 10.7127L16.415 8.9835C17.0255 8.67826 17.1575 7.86461 16.6749 7.38197L12.618 3.32514Z"/>
        </svg>
    </div>
  `,
  minimize: `
    <link rel="stylesheet" href="../lib/css/Button.Minimize.style.css">
    <div class='icon'>
      <svg class='minimize'
        height='24px'
        width='24px'
        viewBox="0 0 20 20" 
        fill="none">
        <path d="M3 10C3 9.72386 3.22386 9.5 3.5 9.5H16.5C16.7761 9.5 17 9.72386 17 10C17 10.2761 16.7761 10.5 16.5 10.5H3.5C3.22386 10.5 3 10.2761 3 10Z"/>
      </svg>
    </div>
  `,
  maximize: `
    <link rel="stylesheet" href="../lib/css/Button.Maximize.style.css">
    <div class='icon'>
      <svg class='maximize'
        height='24px'
        width='24px'
        viewBox="0 0 20 20"
        fill="none">
        <path d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5ZM5 4C4.44772 4 4 4.44772 4 5V15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15V5C16 4.44772 15.5523 4 15 4H5Z"/>
      </svg>
    </div>
  `,
  restore: `
    <link rel="stylesheet" href="../lib/css/Button.Restore.style.css">
    <div class='icon'>
      <svg class='on'
        width="24px" 
        height="24px" 
        viewBox="0 0 20 20" 
        fill="#212121">
        <path d="M5.08496 4C5.29088 3.4174 5.8465 3 6.49961 3H9.99961C11.6565 3 12.9996 4.34315 12.9996 6V9.5C12.9996 10.1531 12.5822 10.7087 11.9996 10.9146V6C11.9996 4.89543 11.1042 4 9.99961 4H5.08496Z"/>
        <path d="M4.5 5H9.5C10.3284 5 11 5.67157 11 6.5V11.5C11 12.3284 10.3284 13 9.5 13H4.5C3.67157 13 3 12.3284 3 11.5V6.5C3 5.67157 3.67157 5 4.5 5ZM4.5 6C4.22386 6 4 6.22386 4 6.5V11.5C4 11.7761 4.22386 12 4.5 12H9.5C9.77614 12 10 11.7761 10 11.5V6.5C10 6.22386 9.77614 6 9.5 6H4.5Z"/>
      </svg>
      <svg class='off'
        width="24px" 
        height="24px" 
        viewBox="0 0 20 20" 
        fill="#212121">
        <path d="M4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM4.5 4H11.5C11.7761 4 12 4.22386 12 4.5V11.5C12 11.7761 11.7761 12 11.5 12H4.5C4.22386 12 4 11.7761 4 11.5V4.5C4 4.22386 4.22386 4 4.5 4Z"/>
      </svg>
    </div>
  `,
  close: `
    <link rel="stylesheet" href="../lib/css/Button.Close.style.css">
    <div class='icon'>
      <svg class='close'
        height='24px'
        width='24px'
        viewBox="0 0 20 20" 
        fill="none">
        <path d="M4.08859 4.21569L4.14645 4.14645C4.32001 3.97288 4.58944 3.9536 4.78431 4.08859L4.85355 4.14645L10 9.293L15.1464 4.14645C15.32 3.97288 15.5894 3.9536 15.7843 4.08859L15.8536 4.14645C16.0271 4.32001 16.0464 4.58944 15.9114 4.78431L15.8536 4.85355L10.707 10L15.8536 15.1464C16.0271 15.32 16.0464 15.5894 15.9114 15.7843L15.8536 15.8536C15.68 16.0271 15.4106 16.0464 15.2157 15.9114L15.1464 15.8536L10 10.707L4.85355 15.8536C4.67999 16.0271 4.41056 16.0464 4.21569 15.9114L4.14645 15.8536C3.97288 15.68 3.9536 15.4106 4.08859 15.2157L4.14645 15.1464L9.293 10L4.14645 4.85355C3.97288 4.67999 3.9536 4.41056 4.08859 4.21569L4.14645 4.14645L4.08859 4.21569Z"/>
      </svg>
    </div>
  `,
  taskbar: `
    <link rel="stylesheet" href="../lib/css/Taskbar.style.css">
      <div class='bar'>
        <button-pin></button-pin>
        <button-minimize></button-minimize>
        <button-maximize></button-maximize>
        <button-restore></button-restore>
        <button-close></button-close>
    </div>
  `,
};

import { Utils } from "../src/utilities/utilities.js";

import { Pin } from "@browser-modules/buttons";
import { Minimize } from "@browser-modules/buttons";
import { Maximize } from "@browser-modules/buttons";
import { Restore } from "@browser-modules/buttons";
import { Close } from "@browser-modules/buttons";

import { Taskbar } from "../src/Taskbar.js";

describe("Given all dependency html templates have been loaded", () => {
  beforeAll(() => {
    Utils.appendTemplate(Pin.tag, templates.pin);
    Utils.appendTemplate(Minimize.tag, templates.minimize);
    Utils.appendTemplate(Maximize.tag, templates.maximize);
    Utils.appendTemplate(Restore.tag, templates.restore);
    Utils.appendTemplate(Close.tag, templates.close);
  });
  it('then the document should have a template with id="pin"', () => {
    expect(document.getElementById("pin")).toBeDefined();
  });
  it('then the document should have a template with id="minimize"', () => {
    expect(document.getElementById("minimize")).toBeDefined();
  });
  it('then the document should have a template with id="maximize"', () => {
    expect(document.getElementById("maximize")).toBeDefined();
  });
  it('then the document should have a template with id="restore"', () => {
    expect(document.getElementById("restore")).toBeDefined();
  });
  it('then the document should have a template with id="close"', () => {
    expect(document.getElementById("close")).toBeDefined();
  });
  describe("Given Taskbar imported", () => {
    it("then Taskbar should be defined", () => {
      expect(Taskbar).toBeDefined();
    });
    it("Then Taskbar.tag should be Tag.Taskbar", () => {
      expect(Taskbar.tag).toBe(Tag.TASKBAR);
    });
    it("Then Taskbar.attributes should be Attribute", () => {
      expect(Taskbar.attributes).toBe(Attribute);
    });
    describe("Given Taskbar defined", () => {
      beforeEach(() => {
        Utils.defineComponent(Pin.tag, Pin);
        Utils.defineComponent(Minimize.tag, Minimize);
        Utils.defineComponent(Maximize.tag, Maximize);
        Utils.defineComponent(Restore.tag, Restore);
        Utils.defineComponent(Close.tag, Close);
        Utils.defineComponent(Taskbar.tag, Taskbar);
      });
      it("Then custom element registry should contain Taskbar", () => {
        expect(customElements.get(Taskbar.tag)).toBe(Taskbar);
      });
      describe("Given HTML Template added to DOM", () => {
        beforeEach(() => {
          Utils.appendTemplate(Tag.TASKBAR, templates.taskbar);
        });
        afterEach(() => {
          Utils.removeTemplate(Tag.TASKBAR);
        });
        it("Then a HTML Template should be available in DOM", () => {
          expect(document.querySelectorAll("#task-bar")).toHaveSize(1);
        });
        describe("When Taskbar component added to DOM", () => {
          let taskbar: Taskbar;
          beforeEach(() => {
            taskbar = Utils.appendComponent<Taskbar>(Tag.TASKBAR);
          });
          afterEach(() => {
            taskbar.remove();
          });
          it("Then Taskbar should be added to DOM", () => {
            expect(document.getElementsByTagName(Taskbar.tag)).toHaveSize(1);
          });
          it("Then taskbar.templateId should be Taskbar.tag", () => {
            expect(taskbar.templateId).toBe(Taskbar.tag);
          });
          describe("Given Defaults have been loaded", () => {
            it("Then taskbar.orientation should be Orientation.HORIZONTAL", () => {
              expect(taskbar.orientation).toBe(Orientation.HORIZONTAL);
            });
            it("Then taskbar.state should be State.UNPINNED", () => {
              expect(taskbar.state).toBe(State.UNPINNED);
            });
            it("Then taskbar.window should be Window.NORMAL", () => {
              expect(taskbar.window).toBe(Window.NORMAL);
            });
            describe("Given Imperative API used", () => {
              // Operations
              it("then taskbar.pin() should exist", () => {
                expect(taskbar.pin).toBeDefined();
              });
              it("then taskbar.unpin() should exist", () => {
                expect(taskbar.unpin).toBeDefined();
              });
              it("then taskbar.restore() should exist", () => {
                expect(taskbar.minimize).toBeDefined();
              });
              it("then taskbar.close() should exist", () => {
                expect(taskbar.maximize).toBeDefined();
              });
              it("then taskbar.restore() should exist", () => {
                expect(taskbar.restore).toBeDefined();
              });
              it("then taskbar.close() should exist", () => {
                expect(taskbar.close).toBeDefined();
              });
              // Events
              it("then taskbar.onhide should exist", () => {
                expect(Utils.hasSetter(taskbar, "onhide")).toBeTruthy();
              });
              it("then taskbar.onshow should exist", () => {
                expect(Utils.hasSetter(taskbar, "onshow")).toBeTruthy();
              });
              it("then taskbar.onpin should exist", () => {
                expect(Utils.hasSetter(taskbar, "onpin")).toBeTruthy();
              });
              it("then taskbar.onunpin should exist", () => {
                expect(Utils.hasSetter(taskbar, "onunpin")).toBeTruthy();
              });
              it("then taskbar.onminimize should exist", () => {
                expect(Utils.hasSetter(taskbar, "onminimize")).toBeTruthy();
              });
              it("then taskbar.onmaximize should exist", () => {
                expect(Utils.hasSetter(taskbar, "onmaximize")).toBeTruthy();
              });
              it("then taskbar.onrestore should exist", () => {
                expect(Utils.hasSetter(taskbar, "onrestore")).toBeTruthy();
              });
              it("then taskbar.onclose should exist", () => {
                expect(Utils.hasSetter(taskbar, "onclose")).toBeTruthy();
              });
              // Behavior
              describe("Given taskbar.hide() called", () => {
                let onhide: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onhide = jasmine.createSpy("onhide");
                  taskbar.onhide = onhide;
                  taskbar.hide();
                  event = onhide.calls.mostRecent().args[0];
                });
                it("Then taskbar.visible should be State.HIDDEN", () => {
                  expect(taskbar.visible).toBe(Visible.NO);
                });
                it("Then html attribute visible should be Visible.NO", () => {
                  let visible = taskbar.getAttribute(Attribute.VISIBLE);
                  expect(visible).toEqual(Visible.NO);
                });
                it("Then onhide should have been called", () => {
                  expect(onhide).toHaveBeenCalled();
                });
                it("Then onhide custom event should have been called with {visible: Visible.NO}", () => {
                  expect(event.detail).toEqual({ visible: Visible.NO });
                });
                describe("Given taskbar.show() called", () => {
                  let onshow: jasmine.Spy;
                  let event: CustomEvent;
                  beforeEach(() => {
                    onshow = jasmine.createSpy("onshow");
                    taskbar.onshow = onshow;
                    taskbar.show();
                    event = onshow.calls.mostRecent().args[0];
                  });
                  it("Then taskbar.visible should be State.VISIBLE", () => {
                    expect(taskbar.visible).toBe(Visible.YES);
                  });
                  it("Then onshow should have been called", () => {
                    expect(onshow).toHaveBeenCalled();
                  });
                  it("Then onshow custom event should have been called with ...args", () => {
                    expect(event.detail).toEqual({ visible: Visible.YES });
                  });
                });
              });
              describe("Given taskbar.show() called", () => {
                let onshow: jasmine.Spy;
                beforeEach(() => {
                  onshow = jasmine.createSpy("onshow");
                  taskbar.onshow = onshow;
                  taskbar.show();
                });
                it("Then taskbar.visible should be State.VISIBLE", () => {
                  expect(taskbar.visible).toBe(Visible.YES);
                });
                it("Then onshow should have been called", () => {
                  expect(onshow).toHaveBeenCalledTimes(0);
                });
              });
              describe("Given taskbar.pin() called", () => {
                let onpin: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onpin = jasmine.createSpy("onhide");
                  taskbar.onpin = onpin;
                  taskbar.pin();
                  event = onpin.calls.mostRecent().args[0];
                });
                it("Then taskbar.state should be State.PINNED", () => {
                  expect(taskbar.state).toBe(State.PINNED);
                });
                it("Then html attribute state should be State.PINNED", () => {
                  let state = taskbar.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.PINNED);
                });
                it("Then onpin should have been called", () => {
                  expect(onpin).toHaveBeenCalled();
                });
                it("Then onhide custom event should have been called with {state: State.PINNED}", () => {
                  expect(event.detail).toEqual({ state: State.PINNED });
                });
                describe("Given taskbar.unpin() called", () => {
                  let onunpin: jasmine.Spy;
                  let event: CustomEvent;
                  beforeEach(() => {
                    onunpin = jasmine.createSpy("onunpin");
                    taskbar.onunpin = onunpin;
                    taskbar.unpin();
                    event = onunpin.calls.mostRecent().args[0];
                  });
                  it("Then taskbar.state should be State.UNPINNED", () => {
                    expect(taskbar.state).toBe(State.UNPINNED);
                  });
                  it("Then onunpin should have been called", () => {
                    expect(onunpin).toHaveBeenCalled();
                  });
                  it("Then onunpin custom event should have been called with {state: State.UNPINNED}", () => {
                    expect(event.detail).toEqual({ state: State.UNPINNED });
                  });
                });
              });
              describe("Given taskbar.unpin() called", () => {
                let onunpin: jasmine.Spy;
                beforeEach(() => {
                  onunpin = jasmine.createSpy("onunpin");
                  taskbar.onunpin = onunpin;
                  taskbar.unpin();
                });
                it("Then taskbar.state should be State.UNPINNED", () => {
                  expect(taskbar.state).toBe(State.UNPINNED);
                });
                it("Then onunpin should have been called", () => {
                  expect(onunpin).toHaveBeenCalledTimes(0);
                });
              });
              describe("Given taskbar.minimize() called", () => {
                let onminimize: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onminimize = jasmine.createSpy("onminimize");
                  taskbar.onminimize = onminimize;
                  taskbar.minimize();
                  event = onminimize.calls.mostRecent().args[0];
                });
                it("Then taskbar.window should be Window.MINIMIZED", () => {
                  expect(taskbar.window).toBe(Window.MINIMIZED);
                });
                it("Then html attribute window should be Window.MINIMIZED", () => {
                  let window = taskbar.getAttribute(Attribute.WINDOW);
                  expect(window).toEqual(Window.MINIMIZED);
                });
                it("Then onminimize should have been called", () => {
                  expect(onminimize).toHaveBeenCalled();
                });
                it("Then onhide custom event should have been called with {window: Window.MINIMIZED}", () => {
                  expect(event.detail).toEqual({ window: Window.MINIMIZED });
                });
                describe("Given taskbar.restore() called", () => {
                  let onrestore: jasmine.Spy;
                  let event: CustomEvent;
                  beforeEach(() => {
                    onrestore = jasmine.createSpy("onrestore");
                    taskbar.onrestore = onrestore;
                    taskbar.restore();
                    event = onrestore.calls.mostRecent().args[0];
                  });
                  it("Then taskbar.window should be Window.NORMAL", () => {
                    expect(taskbar.window).toBe(Window.NORMAL);
                  });
                  it("Then onrestore should have been called", () => {
                    expect(onrestore).toHaveBeenCalled();
                  });
                  it("Then onrestore custom event should have been called with {window: Window.NORMAL}", () => {
                    expect(event.detail).toEqual({ window: Window.NORMAL });
                  });
                });
                describe("Given taskbar.close() called", () => {
                  let onclose: jasmine.Spy;
                  let event: CustomEvent;
                  beforeEach(() => {
                    onclose = jasmine.createSpy("onclose");
                    taskbar.onclose = onclose;
                    taskbar.close();
                    event = onclose.calls.mostRecent().args[0];
                  });
                  it("Then taskbar.window should be Window.CLOSED", () => {
                    expect(taskbar.window).toBe(Window.CLOSED);
                  });
                  it("Then onclose should have been called", () => {
                    expect(onclose).toHaveBeenCalled();
                  });
                  it("Then onclose custom event should have been called with {window: Window.CLOSED}", () => {
                    expect(event.detail).toEqual({ window: Window.CLOSED });
                  });
                });
              });
              describe("Given taskbar.maximize() called", () => {
                let onmaximize: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onmaximize = jasmine.createSpy("onmaximize");
                  taskbar.onmaximize = onmaximize;
                  taskbar.maximize();
                  event = onmaximize.calls.mostRecent().args[0];
                });
                it("Then taskbar.window should be Window.MAXIMIZED", () => {
                  expect(taskbar.window).toBe(Window.MAXIMIZED);
                });
                it("Then html attribute window should be Window.MAXIMIZED", () => {
                  let window = taskbar.getAttribute(Attribute.WINDOW);
                  expect(window).toEqual(Window.MAXIMIZED);
                });
                it("Then onmaximize should have been called", () => {
                  expect(onmaximize).toHaveBeenCalled();
                });
                it("Then onhide custom event should have been called with {window: Window.MAXIMIZED}", () => {
                  expect(event.detail).toEqual({ window: Window.MAXIMIZED });
                });
                describe("Given taskbar.minimize() called", () => {
                  let onminimize: jasmine.Spy;
                  let event: CustomEvent;
                  beforeEach(() => {
                    onminimize = jasmine.createSpy("onminimize");
                    taskbar.onminimize = onminimize;
                    taskbar.minimize();
                    event = onminimize.calls.mostRecent().args[0];
                  });
                  it("Then taskbar.window should be Window.MINIMIZED", () => {
                    expect(taskbar.window).toBe(Window.MINIMIZED);
                  });
                  it("Then onminimize should have been called", () => {
                    expect(onminimize).toHaveBeenCalled();
                  });
                  it("Then onminimize custom event should have been called with {window: Window.MINIMIZED}", () => {
                    expect(event.detail).toEqual({ window: Window.MINIMIZED });
                  });
                  describe("Given taskbar.restore() called", () => {
                    let onrestore: jasmine.Spy;
                    let event: CustomEvent;
                    beforeEach(() => {
                      onrestore = jasmine.createSpy("onrestore");
                      taskbar.onrestore = onrestore;
                      taskbar.restore();
                      event = onrestore.calls.mostRecent().args[0];
                    });
                    it("Then taskbar.window should be Window.NORMAL", () => {
                      expect(taskbar.window).toBe(Window.NORMAL);
                    });
                    it("Then onrestore should have been called", () => {
                      expect(onrestore).toHaveBeenCalled();
                    });
                    it("Then onrestore custom event should have been called with {window: Window.NORMAL}", () => {
                      expect(event.detail).toEqual({ window: Window.NORMAL });
                    });
                  });
                });
                describe("Given taskbar.restore() called", () => {
                  let onrestore: jasmine.Spy;
                  let event: CustomEvent;
                  beforeEach(() => {
                    onrestore = jasmine.createSpy("onrestore");
                    taskbar.onrestore = onrestore;
                    taskbar.restore();
                    event = onrestore.calls.mostRecent().args[0];
                  });
                  it("Then taskbar.window should be Window.NORMAL", () => {
                    expect(taskbar.window).toBe(Window.NORMAL);
                  });
                  it("Then onrestore should have been called", () => {
                    expect(onrestore).toHaveBeenCalled();
                  });
                  it("Then onrestore custom event should have been called with {window: Window.NORMAL}", () => {
                    expect(event.detail).toEqual({ window: Window.NORMAL });
                  });
                });
                describe("Given taskbar.close() called", () => {
                  let onclose: jasmine.Spy;
                  let event: CustomEvent;
                  beforeEach(() => {
                    onclose = jasmine.createSpy("onclose");
                    taskbar.onclose = onclose;
                    taskbar.close();
                    event = onclose.calls.mostRecent().args[0];
                  });
                  it("Then taskbar.window should be Window.CLOSED", () => {
                    expect(taskbar.window).toBe(Window.CLOSED);
                  });
                  it("Then onclose should have been called", () => {
                    expect(onclose).toHaveBeenCalled();
                  });
                  it("Then onclose custom event should have been called with {window: Window.CLOSED}", () => {
                    expect(event.detail).toEqual({ window: Window.CLOSED });
                  });
                });
              });
              describe("Given taskbar.close() called", () => {
                let onclose: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onclose = jasmine.createSpy("onclose");
                  taskbar.onclose = onclose;
                  taskbar.close();
                  event = onclose.calls.mostRecent().args[0];
                });
                it("Then taskbar.window should be Window.CLOSED", () => {
                  expect(taskbar.window).toBe(Window.CLOSED);
                });
                it("Then html attribute window should be Window.CLOSED", () => {
                  let window = taskbar.getAttribute(Attribute.WINDOW);
                  expect(window).toEqual(Window.CLOSED);
                });
                it("Then onclose should have been called", () => {
                  expect(onclose).toHaveBeenCalled();
                });
                it("Then onclose custom event should have been called with {window: Window.CLOSED}", () => {
                  expect(event.detail).toEqual({ window: Window.CLOSED });
                });
              });
            });
          });
        });
      });
    });
  });
});
