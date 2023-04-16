// @category Metadata: Components
import { Tag } from "../node_modules/@browser-modules/web.component/lib/enums/enum.tag.js"
describe("Given Tag imported", () => {
    it("then Tag should be defined", () => {
        expect(Tag).toBeDefined();
    });
    it("then Tag.Taskbar should be defined", () => {
        expect(Tag.Taskbar).toBeDefined();
    });
});

/**
 * @category Metadata: Attributes
 */
import { Attribute } from "../src/Taskbar.metadata.js"
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
import { Visible     } from "../src/Taskbar.metadata.js"
import { State       } from "../src/Taskbar.metadata.js"
import { Window      } from "../src/Taskbar.metadata.js"
import { Orientation } from "../src/Taskbar.metadata.js"
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
import { Event } from "../src/Taskbar.metadata.js"
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
import { Operation } from "../src/Taskbar.metadata.js"
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

const Template = `
    <link rel="stylesheet" href="../lib/css/Taskbar.style.css">
    <div class='bar'>
        <button-pin></button-pin>
        <button-minimize></button-minimize>
        <button-restore></button-restore>
        <button-close></button-close>
    </div>`

import { Utils   } from "../src/utilities/utilities.js";
import { Taskbar } from "../src/Taskbar.js";

describe("Given Taskbar imported", () => {
    it("then Taskbar should be defined", () => {
        expect(Taskbar).toBeDefined();
    });
    it('Then Taskbar.tag should be Tag.Taskbar', () => {
        expect(Taskbar.tag).toBe(Tag.Taskbar)
    })
    it('Then Taskbar.attributes should be Attribute', () => {
        expect(Taskbar.attributes).toBe(Attribute)
    })
    describe('Given Taskbar defined', () => {
        beforeEach(() => {
            Utils.defineComponent(Taskbar.tag, Taskbar)
        })
        it('Then custom element registry should contain Taskbar', () => {
            expect(customElements.get(Taskbar.tag)).toBe(Taskbar)
        })
        describe('Given HTML Template added to DOM', () => {
            let HTMLTemplate: HTMLTemplateElement
            beforeEach(() => {
                HTMLTemplate = Utils.appendTemplate(Taskbar.tag, Template)
            })
            afterEach(() =>{
                Utils.removeTemplate(Taskbar.tag)
            })
            it('Then a HTML Template should be available in DOM', () => {
                expect(document.getElementsByTagName('template')).toHaveSize(1)
            })
            describe('When Taskbar component added to DOM', () => {
                let taskbar : Taskbar;
                beforeEach(() => {
                    taskbar = Utils.appendComponent<Taskbar>(Taskbar.tag)
                })
                afterEach(() => {
                    taskbar.remove()
                })
                it('Then Taskbar should be added to DOM', () => {
                    expect(document.getElementsByTagName(Taskbar.tag)).toHaveSize(1)
                })
                it('Then taskbar.templateId should be Taskbar.tag', () => {
                    expect(taskbar.templateId).toBe(Taskbar.tag)
                })
                describe('Given Defaults have been loaded', () => {
                    it('Then taskbar.orientation should be Orientation.HORIZONTAL', () => {
                        expect(taskbar.orientation).toBe(Orientation.HORIZONTAL)
                    })
                    it('Then taskbar.state should be State.UNPINNED', () => {
                        expect(taskbar.state).toBe(State.UNPINNED)
                    })
                    it('Then taskbar.window should be Window.NORMAL', () => {
                        expect(taskbar.window).toBe(Window.NORMAL)
                    })
                    describe('Given Imperative API used', () => {
                        // Operations
                        it('then taskbar.pin() should exist',      () => {
                            expect(taskbar.pin).toBeDefined()
                        })
                        it('then taskbar.unpin() should exist',    () => {
                            expect(taskbar.unpin).toBeDefined()
                        })
                        it('then taskbar.restore() should exist',  () => {
                            expect(taskbar.minimize).toBeDefined()
                        })
                        it('then taskbar.close() should exist',    () => {
                            expect(taskbar.maximize).toBeDefined()
                        })
                        it('then taskbar.restore() should exist',  () => {
                            expect(taskbar.restore).toBeDefined()
                        })
                        it('then taskbar.close() should exist',    () => {
                            expect(taskbar.close).toBeDefined()
                        })
                        // Events
                        it('then taskbar.onhide should exist',     () => {
                            expect(Utils.hasSetter(taskbar, 'onhide')).toBeTruthy()
                        })
                        it('then taskbar.onshow should exist',     () => {
                            expect(Utils.hasSetter(taskbar, 'onshow')).toBeTruthy()
                        })
                        it('then taskbar.onpin should exist',      () => {
                            expect(Utils.hasSetter(taskbar, 'onpin')).toBeTruthy()
                        })
                        it('then taskbar.onunpin should exist',    () => {
                            expect(Utils.hasSetter(taskbar, 'onunpin')).toBeTruthy()
                        })
                        it('then taskbar.onminimize should exist', () => {
                            expect(Utils.hasSetter(taskbar, 'onminimize')).toBeTruthy()
                        })
                        it('then taskbar.onmaximize should exist', () => {
                            expect(Utils.hasSetter(taskbar, 'onmaximize')).toBeTruthy()
                        })
                        it('then taskbar.onrestore should exist',  () => {
                            expect(Utils.hasSetter(taskbar, 'onrestore')).toBeTruthy()
                        })
                        it('then taskbar.onclose should exist',    () => {
                            expect(Utils.hasSetter(taskbar, 'onclose')).toBeTruthy()
                        })
                        // Behavior
                        describe('Given taskbar.hide() called', () => {
                            let onhide: jasmine.Spy
                            let event: CustomEvent
                            beforeEach(() => {
                                onhide = jasmine.createSpy('onhide')
                                taskbar.onhide = onhide
                                taskbar.hide()
                                event = onhide.calls.mostRecent().args[0]
                            })
                            it('Then taskbar.visible should be State.HIDDEN', () => {
                                expect(taskbar.visible).toBe(Visible.NO)
                            })
                            it('Then html attribute visible should be Visible.NO', () => {
                                let visible = taskbar.getAttribute(Attribute.VISIBLE)
                                expect(visible).toEqual(Visible.NO)
                            })
                            it('Then onhide should have been called', () => {
                                expect(onhide).toHaveBeenCalled()
                            })
                            it('Then onhide custom event should have been called with {visible: Visible.NO}', () => {
                                expect(event.detail).toEqual({visible: Visible.NO})
                            })
                            describe('Given taskbar.show() called', () => {
                                let onshow: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onshow = jasmine.createSpy('onshow')
                                    taskbar.onshow = onshow
                                    taskbar.show()
                                    event = onshow.calls.mostRecent().args[0]
                                })
                                it('Then taskbar.visible should be State.VISIBLE', () => {
                                    expect(taskbar.visible).toBe(Visible.YES)
                                })
                                it('Then onshow should have been called', () => {
                                    expect(onshow).toHaveBeenCalled()
                                })
                                it('Then onshow custom event should have been called with ...args', () => {
                                    expect(event.detail).toEqual({visible: Visible.YES})
                                })
                            })
                        })
                        describe('Given taskbar.show() called', () => {
                            let onshow: jasmine.Spy
                            beforeEach(() => {
                                onshow = jasmine.createSpy('onshow')
                                taskbar.onshow = onshow
                                taskbar.show()
                            })
                            it('Then taskbar.visible should be State.VISIBLE', () => {
                                expect(taskbar.visible).toBe(Visible.YES)
                            })
                            it('Then onshow should have been called', () => {
                                expect(onshow).toHaveBeenCalledTimes(0)
                            })
                        })
                        describe('Given taskbar.pin() called', () => {
                            let onpin: jasmine.Spy
                            let event: CustomEvent
                            beforeEach(() => {
                                
                                onpin = jasmine.createSpy('onhide')
                                taskbar.onpin = onpin
                                taskbar.pin()
                                event = onpin.calls.mostRecent().args[0]
                            })
                            it('Then taskbar.state should be State.PINNED', () => {
                                expect(taskbar.state).toBe(State.PINNED)
                            })
                            it('Then html attribute state should be State.PINNED', () => {
                                let state = taskbar.getAttribute(Attribute.STATE)
                                expect(state).toEqual(State.PINNED)
                            })
                            it('Then onpin should have been called', () => {
                                expect(onpin).toHaveBeenCalled()
                            })
                            it('Then onhide custom event should have been called with {state: State.PINNED}', () => {
                                expect(event.detail).toEqual({state: State.PINNED})
                            })
                            describe('Given taskbar.unpin() called', () => {
                                let onunpin: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onunpin = jasmine.createSpy('onunpin')
                                    taskbar.onunpin = onunpin
                                    taskbar.unpin()
                                    event = onunpin.calls.mostRecent().args[0]
                                })
                                it('Then taskbar.state should be State.UNPINNED', () => {
                                    expect(taskbar.state).toBe(State.UNPINNED)
                                })
                                it('Then onunpin should have been called', () => {
                                    expect(onunpin).toHaveBeenCalled()
                                })
                                it('Then onunpin custom event should have been called with {state: State.UNPINNED}', () => {
                                    expect(event.detail).toEqual({state: State.UNPINNED})
                                })
                            })
                        })
                        describe('Given taskbar.unpin() called', () => {
                            let onunpin: jasmine.Spy
                            beforeEach(() => {
                                onunpin = jasmine.createSpy('onunpin')
                                taskbar.onunpin = onunpin
                                taskbar.unpin()
                            })
                            it('Then taskbar.state should be State.UNPINNED', () => {
                                expect(taskbar.state).toBe(State.UNPINNED)
                            })
                            it('Then onunpin should have been called', () => {
                                expect(onunpin).toHaveBeenCalledTimes(0)
                            })
                        })
                        describe('Given taskbar.minimize() called', () => {
                            let onminimize: jasmine.Spy
                            let event: CustomEvent
                            beforeEach(() => {
                                onminimize = jasmine.createSpy('onminimize')
                                taskbar.onminimize = onminimize
                                taskbar.minimize()
                                event = onminimize.calls.mostRecent().args[0]
                            })
                            it('Then taskbar.window should be Window.MINIMIZED', () => {
                                expect(taskbar.window).toBe(Window.MINIMIZED)
                            })
                            it('Then html attribute window should be Window.MINIMIZED', () => {
                                let window = taskbar.getAttribute(Attribute.WINDOW)
                                expect(window).toEqual(Window.MINIMIZED)
                            })
                            it('Then onminimize should have been called', () => {
                                expect(onminimize).toHaveBeenCalled()
                            })
                            it('Then onhide custom event should have been called with {window: Window.MINIMIZED}', () => {
                                expect(event.detail).toEqual({window: Window.MINIMIZED})
                            })
                            describe('Given taskbar.restore() called', () => {
                                let onrestore: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onrestore = jasmine.createSpy('onrestore')
                                    taskbar.onrestore = onrestore
                                    taskbar.restore()
                                    event = onrestore.calls.mostRecent().args[0]
                                })
                                it('Then taskbar.window should be Window.NORMAL', () => {
                                    expect(taskbar.window).toBe(Window.NORMAL)
                                })
                                it('Then onrestore should have been called', () => {
                                    expect(onrestore).toHaveBeenCalled()
                                })
                                it('Then onrestore custom event should have been called with {window: Window.NORMAL}', () => {
                                    expect(event.detail).toEqual({window: Window.NORMAL})
                                })
                            })
                            describe('Given taskbar.close() called', () => {
                                let onclose: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onclose = jasmine.createSpy('onclose')
                                    taskbar.onclose = onclose
                                    taskbar.close()
                                    event = onclose.calls.mostRecent().args[0]
                                })
                                it('Then taskbar.window should be Window.CLOSED', () => {
                                    expect(taskbar.window).toBe(Window.CLOSED)
                                })
                                it('Then onclose should have been called', () => {
                                    expect(onclose).toHaveBeenCalled()
                                })
                                it('Then onclose custom event should have been called with {window: Window.CLOSED}', () => {
                                    expect(event.detail).toEqual({window: Window.CLOSED})
                                })
                            })
                        })
                        describe('Given taskbar.maximize() called', () => {
                            let onmaximize: jasmine.Spy
                            let event: CustomEvent
                            beforeEach(() => {
                                onmaximize = jasmine.createSpy('onmaximize')
                                taskbar.onmaximize = onmaximize
                                taskbar.maximize()
                                event = onmaximize.calls.mostRecent().args[0]
                            })
                            it('Then taskbar.window should be Window.MAXIMIZED', () => {
                                expect(taskbar.window).toBe(Window.MAXIMIZED)
                            })
                            it('Then html attribute window should be Window.MAXIMIZED', () => {
                                let window = taskbar.getAttribute(Attribute.WINDOW)
                                expect(window).toEqual(Window.MAXIMIZED)
                            })
                            it('Then onmaximize should have been called', () => {
                                expect(onmaximize).toHaveBeenCalled()
                            })
                            it('Then onhide custom event should have been called with {window: Window.MAXIMIZED}', () => {
                                expect(event.detail).toEqual({window: Window.MAXIMIZED})
                            })
                            describe('Given taskbar.minimize() called', () => {
                                let onminimize: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onminimize = jasmine.createSpy('onminimize')
                                    taskbar.onminimize = onminimize
                                    taskbar.minimize()
                                    event = onminimize.calls.mostRecent().args[0]
                                })
                                it('Then taskbar.window should be Window.MINIMIZED', () => {
                                    expect(taskbar.window).toBe(Window.MINIMIZED)
                                })
                                it('Then onminimize should have been called', () => {
                                    expect(onminimize).toHaveBeenCalled()
                                })
                                it('Then onminimize custom event should have been called with {window: Window.MINIMIZED}', () => {
                                    expect(event.detail).toEqual({window: Window.MINIMIZED})
                                })
                                describe('Given taskbar.restore() called', () => {
                                    let onrestore: jasmine.Spy
                                    let event: CustomEvent
                                    beforeEach(() => {
                                        onrestore = jasmine.createSpy('onrestore')
                                        taskbar.onrestore = onrestore
                                        taskbar.restore()
                                        event = onrestore.calls.mostRecent().args[0]
                                    })
                                    it('Then taskbar.window should be Window.NORMAL', () => {
                                        expect(taskbar.window).toBe(Window.NORMAL)
                                    })
                                    it('Then onrestore should have been called', () => {
                                        expect(onrestore).toHaveBeenCalled()
                                    })
                                    it('Then onrestore custom event should have been called with {window: Window.NORMAL}', () => {
                                        expect(event.detail).toEqual({window: Window.NORMAL})
                                    })
                                })
                            })
                            describe('Given taskbar.restore() called', () => {
                                let onrestore: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onrestore = jasmine.createSpy('onrestore')
                                    taskbar.onrestore = onrestore
                                    taskbar.restore()
                                    event = onrestore.calls.mostRecent().args[0]
                                })
                                it('Then taskbar.window should be Window.NORMAL', () => {
                                    expect(taskbar.window).toBe(Window.NORMAL)
                                })
                                it('Then onrestore should have been called', () => {
                                    expect(onrestore).toHaveBeenCalled()
                                })
                                it('Then onrestore custom event should have been called with {window: Window.NORMAL}', () => {
                                    expect(event.detail).toEqual({window: Window.NORMAL})
                                })
                            })
                            describe('Given taskbar.close() called', () => {
                                let onclose: jasmine.Spy
                                let event: CustomEvent
                                beforeEach(() => {
                                    onclose = jasmine.createSpy('onclose')
                                    taskbar.onclose = onclose
                                    taskbar.close()
                                    event = onclose.calls.mostRecent().args[0]
                                })
                                it('Then taskbar.window should be Window.CLOSED', () => {
                                    expect(taskbar.window).toBe(Window.CLOSED)
                                })
                                it('Then onclose should have been called', () => {
                                    expect(onclose).toHaveBeenCalled()
                                })
                                it('Then onclose custom event should have been called with {window: Window.CLOSED}', () => {
                                    expect(event.detail).toEqual({window: Window.CLOSED})
                                })
                            })
                        })
                        describe('Given taskbar.close() called', () => {
                            let onclose: jasmine.Spy
                            let event: CustomEvent
                            beforeEach(() => {
                                onclose = jasmine.createSpy('onclose')
                                taskbar.onclose = onclose
                                taskbar.close()
                                event = onclose.calls.mostRecent().args[0]
                            })
                            it('Then taskbar.window should be Window.CLOSED', () => {
                                expect(taskbar.window).toBe(Window.CLOSED)
                            })
                            it('Then html attribute window should be Window.CLOSED', () => {
                                let window = taskbar.getAttribute(Attribute.WINDOW)
                                expect(window).toEqual(Window.CLOSED)
                            })
                            it('Then onclose should have been called', () => {
                                expect(onclose).toHaveBeenCalled()
                            })
                            it('Then onclose custom event should have been called with {window: Window.CLOSED}', () => {
                                expect(event.detail).toEqual({window: Window.CLOSED})
                            })
                        })
                    })
                })
            })
        })
    })
});