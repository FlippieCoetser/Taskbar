/**
* @module Taskbar
*/

import { Component     } from "@browser-modules/web.component";
import { Machine       } from "@browser-modules/machine";
import { Attribute     } from "./Taskbar.metadata.js";
import { Visible       } from "./Taskbar.metadata.js";
import { State         } from "./Taskbar.metadata.js";
import { Orientation   } from "./Taskbar.metadata.js";
import { Window        } from "./Taskbar.metadata.js";
import { Event         } from "./Taskbar.metadata.js";
import { Handler       } from "./Taskbar.metadata.js";
import { States        } from "./Taskbar.metadata.js";
import { Configuration } from "./Taskbar.config.js";

/**  
* @category Components
*/
export class Taskbar extends Component {
    /**
    * @category Attributes
    */
    static get attributes() { return Attribute}

    /**
    * Contains the bindings of UI Gestures and Configuration of the finite state machine.
    * @hidden
    */
    public configuration = Configuration
    public machine

    /**
    * Default visibility is `yes`
    */
    private _visible: Visible = Visible.YES
    
    /**
    * Default state is `unpinned`
    */
    private _state: State = State.UNPINNED

    /**
    * Default orientation is `horizontal`
    */
    private _orientation: Orientation = Orientation.HORIZONTAL

    /**
    * Default window is `normal`
    */
    private _window: Window = Window.NORMAL

    /**
    * @hidden
    */
    constructor() {
        super()
        this.machine = new Machine<Attribute, States, Event>(Configuration)
        this._registerMachineEvents()
    }

    private _emitCustomEvent   = (event, data) => 
    this.dispatchEvent(new CustomEvent(event,{detail:data}))

    private _registerMachineEvents = () => { 
        this.machine.on(Event.ONHIDE,(visible) => {
            this.visible = visible
            this._emitCustomEvent(Event.ONHIDE, { visible: visible })
        })
        this.machine.on(Event.ONSHOW,(visible) => {
            this.visible = visible
            this._emitCustomEvent(Event.ONSHOW, { visible: visible })
        })
        this.machine.on(Event.ONPIN,(state) => {
            this.state = state
            this._emitCustomEvent(Event.ONPIN, { state: state })
        })
        this.machine.on(Event.ONUNPIN,(state) => {
            this.state = state
            this._emitCustomEvent(Event.ONUNPIN, { state: state })
        })
        this.machine.on(Event.ONMINIMIZE,(window) => {
            this.window = window
            this._emitCustomEvent(Event.ONMINIMIZE, { window: window })
        })
        this.machine.on(Event.ONMAXIMIZE,(window) => {
            this.window = window
            this._emitCustomEvent(Event.ONMAXIMIZE, { window: window })
        })
        this.machine.on(Event.ONRESTORE,(window) => {
            this.window = window
            this._emitCustomEvent(Event.ONRESTORE, { window: window })
        })
        this.machine.on(Event.ONCLOSE,(window) => {
            this.window = window
            this._emitCustomEvent(Event.ONCLOSE, { window: window })
        })
    }

    /**  
    * @category State
    */
    public get visible(): Visible {
        return <Visible>this.getAttribute(Attribute.VISIBLE) ?? this._visible;
    }
    public set visible(visible: Visible) {
        this._visible = visible;
        visible == Visible.YES && this.removeAttribute(Attribute.VISIBLE);
        visible == Visible.NO && this.setAttribute(Attribute.VISIBLE, visible);
    }

    /**
    * Takes any value of the State enumeration
    * @category State
    */
    public get state(): State { 
        return <State><unknown>this.getAttribute(Attribute.STATE) ?? this._state;
    }
    public set state(state: State) {
        this._state = state;
        this.setAttribute(Attribute.STATE, <string><unknown>state);
    }

    /**
    * Takes any value of the State enumeration
    * @category State
    */
    public get window(): Window { 
        return <Window><unknown>this.getAttribute(Attribute.WINDOW) ?? this._window;
    }
    public set window(window: Window) {
        this._window = window;
        this.setAttribute(Attribute.WINDOW, <string><unknown>window);
    }

    /**
    * Takes any value of the State enumeration
    * @category State
    */
    public get orientation(): Orientation { 
        return <Orientation><unknown>this.getAttribute(Attribute.ORIENTATION) ?? this._orientation;
    }
    public set orientation(orientation: Orientation) {
        this._orientation = orientation;
        this.setAttribute(Attribute.ORIENTATION, <string><unknown>orientation);
    }

    /**
    * Triggered via `.hide()`
    * @event
    * @category Events 
    */
    public set onhide(handler: Handler) {
        this.addEventListener(Event.ONHIDE,handler);
    }
        
    /**
    * Triggered via `.show()`
    * @event
    * @category Events
    */
    public set onshow(handler: Handler) {
        this.addEventListener(Event.ONSHOW,handler);
    }

    /**
    * Triggered via `.pin()`
    * @event
    * @category Events
    */
    public set onpin(handler: Handler) {
        this.addEventListener(Event.ONPIN,handler);
    }

    /**
    * Triggered via `.unpin()`
    * @event
    * @category Events
    */
    public set onunpin(handler: Handler) {
        this.addEventListener(Event.ONUNPIN,handler);
    }

    /**
    * Triggered via `.minimize()`
    * @event
    * @category Events
    */
    public set onminimize(handler: Handler) {
        this.addEventListener(Event.ONMINIMIZE,handler);
    }

    /**
    * Triggered via `.maximize()`
    * @event
    * @category Events
    */
    public set onmaximize(handler: Handler) {
        this.addEventListener(Event.ONMAXIMIZE,handler);
    }

    /**
    * Triggered via `.restore()`
    * @event
    * @category Events
    */
    public set onrestore(handler: Handler) {
        this.addEventListener(Event.ONRESTORE,handler);
    }

    /**
    * Triggered via `.close()`
    * @event
    * @category Events
    */
    public set onclose(handler: Handler) {
        this.addEventListener(Event.ONCLOSE,handler);
    }

    /**
    * Id of HTML Template which defaults to `.tag` when no value defined inside component html tag. 
    * @readonly
    * @category State
    */
    public get templateId() {
        return this.getAttribute(Attribute.TEMPLATE) ?? Taskbar.tag;
    }

    /**
    * @category Operations
    */
    public hide = (): boolean => 
        this.machine.trigger(Event.ONHIDE)

    /**
    * @category Operations
    */
    public show = (): boolean => 
        this.machine.trigger(Event.ONSHOW)

    /**
    * @category Operations
    */
    public pin = (): boolean => 
        this.machine.trigger(Event.ONPIN)

    /**
    * @category Operations
    */
    public unpin = (): boolean => 
        this.machine.trigger(Event.ONUNPIN)

    /**
    * @category Operations
    */
    public minimize = (): boolean => 
        this.machine.trigger(Event.ONMINIMIZE)

    /**
    * @category Operations
    */
    public maximize = (): boolean => 
        this.machine.trigger(Event.ONMAXIMIZE)

    /**
    * @category Operations
    */
    public restore = (): boolean => 
        this.machine.trigger(Event.ONRESTORE)

    /**
    * @category Operations
    */
    public close = (): boolean => 
        this.machine.trigger(Event.ONCLOSE)
}