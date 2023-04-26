/**
 * @module Taskbar
 */

import { Component } from "@browser-modules/web.component";
import { Machine } from "@browser-modules/machine";
import { Pin } from "@browser-modules/buttons";
import { Minimize } from "@browser-modules/buttons";
import { Maximize } from "@browser-modules/buttons";
import { Restore } from "@browser-modules/buttons";
import { Close } from "@browser-modules/buttons";

import { Attribute, Attributes } from "./Taskbar.metadata.js";
import { Visible, Visibility } from "./Taskbar.metadata.js";
import { State, States } from "./Taskbar.metadata.js";
import { Orientation, Orientations } from "./Taskbar.metadata.js";
import { Window, Windows } from "./Taskbar.metadata.js";
import { Event, Events } from "./Taskbar.metadata.js";
import { Handler } from "./Taskbar.metadata.js";
import { Configuration } from "./Taskbar.config.js";

/**
 * @category Component
 */
export class Taskbar extends Component {
  /**
   * @category Attributes
   */
  static get attributes() {
    return Attribute;
  }

  /**
   * Contains the bindings of UI Gestures and Configuration of the finite state machine.
   * @hidden
   */
  public configuration = Configuration;
  public machine = new Machine<Attributes, Events>(Configuration);

  /**
   * Default visibility is `yes`
   */
  private _visible: Visibility = Visible.YES;

  /**
   * Default state is `unpinned`
   */
  private _state: States = State.UNPINNED;

  /**
   * Default orientation is `horizontal`
   */
  private _orientation: Orientations = Orientation.HORIZONTAL;

  /**
   * Default window is `normal`
   */
  private _window: Windows = Window.NORMAL;

  /**
   * @hidden
   */
  constructor() {
    super();
    this._registerMachineEvents();
  }

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

  private _emitCustomEvent = (event, data, { preventDispatch = false } = {}) =>
    !preventDispatch &&
    this.dispatchEvent(new CustomEvent(event, { detail: data }));

  private _registerMachineEvents = () => {
    this.machine.on(Event.ONHIDE, (visible, emitOptions) => {
      this.visible = visible;
      this._emitCustomEvent(Event.ONHIDE, { visible: visible }, emitOptions);
    });
    this.machine.on(Event.ONSHOW, (visible, emitOptions) => {
      this.visible = visible;
      this._emitCustomEvent(Event.ONSHOW, { visible: visible }, emitOptions);
    });
    this.machine.on(Event.ONPIN, (state, emitOptions) => {
      this.state = state;
      this._emitCustomEvent(Event.ONPIN, { state: state }, emitOptions);
    });
    this.machine.on(Event.ONUNPIN, (state, emitOptions) => {
      this.state = state;
      this._emitCustomEvent(Event.ONUNPIN, { state: state }, emitOptions);
    });
    this.machine.on(Event.ONMINIMIZE, (window, emitOptions) => {
      this.window = window;
      this._emitCustomEvent(Event.ONMINIMIZE, { window: window }, emitOptions);
    });
    this.machine.on(Event.ONMAXIMIZE, (window, emitOptions) => {
      this.window = window;
      this._emitCustomEvent(Event.ONMAXIMIZE, { window: window }, emitOptions);
    });
    this.machine.on(Event.ONRESTORE, (window, emitOptions) => {
      this.window = window;
      this._emitCustomEvent(Event.ONRESTORE, { window: window }, emitOptions);
    });
    this.machine.on(Event.ONCLOSE, (window, emitOptions) => {
      this.window = window;
      this._emitCustomEvent(Event.ONCLOSE, { window: window }, emitOptions);
      this.remove();
    });
  };

  /**
   * @category State
   */
  public get visible(): Visibility {
    return <Visibility>this.getAttribute(Attribute.VISIBLE) ?? this._visible;
  }
  public set visible(visible: Visibility) {
    this._visible = visible;
    visible == Visible.YES && this.removeAttribute(Attribute.VISIBLE);
    visible == Visible.NO && this.setAttribute(Attribute.VISIBLE, visible);
  }

  /**
   * Takes any value of the State enumeration
   * @category State
   */
  public get state(): States {
    return <States>(<unknown>this.getAttribute(Attribute.STATE)) ?? this._state;
  }
  private set state(state: States) {
    this._state = state;
    this.setAttribute(Attribute.STATE, <string>(<unknown>state));
  }

  /**
   * Takes any value of the State enumeration
   * @category State
   */
  public get window(): Windows {
    return (
      <Windows>(<unknown>this.getAttribute(Attribute.WINDOW)) ?? this._window
    );
  }
  private set window(window: Windows) {
    this._window = window;
    this.setAttribute(Attribute.WINDOW, <string>(<unknown>window));
  }

  /**
   * Takes any value of the State enumeration
   * @category State
   */
  public get orientation(): Orientations {
    return (
      <Orientations>(<unknown>this.getAttribute(Attribute.ORIENTATION)) ??
      this._orientation
    );
  }
  private set orientation(orientation: Orientations) {
    this._orientation = orientation;
    this.setAttribute(Attribute.ORIENTATION, <string>(<unknown>orientation));
  }

  /**
   * Triggered via `.hide()`
   * @event
   * @category Events
   */
  public set onhide(handler: Handler) {
    this.addEventListener(Event.ONHIDE, handler);
  }

  /**
   * Triggered via `.show()`
   * @event
   * @category Events
   */
  public set onshow(handler: Handler) {
    this.addEventListener(Event.ONSHOW, handler);
  }

  /**
   * Triggered via `.pin()`
   * @event
   * @category Events
   */
  public set onpin(handler: Handler) {
    this.addEventListener(Event.ONPIN, handler);
  }

  /**
   * Triggered via `.unpin()`
   * @event
   * @category Events
   */
  public set onunpin(handler: Handler) {
    this.addEventListener(Event.ONUNPIN, handler);
  }

  /**
   * Triggered via `.minimize()`
   * @event
   * @category Events
   */
  public set onminimize(handler: Handler) {
    this.addEventListener(Event.ONMINIMIZE, handler);
  }

  /**
   * Triggered via `.maximize()`
   * @event
   * @category Events
   */
  public set onmaximize(handler: Handler) {
    this.addEventListener(Event.ONMAXIMIZE, handler);
  }

  /**
   * Triggered via `.restore()`
   * @event
   * @category Events
   */
  public set onrestore(handler: Handler) {
    this.addEventListener(Event.ONRESTORE, handler);
  }

  /**
   * Triggered via `.close()`
   * @event
   * @category Events
   */
  public set onclose(handler: Handler) {
    this.addEventListener(Event.ONCLOSE, handler);
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
  public hide = (): boolean => this.machine.trigger(Event.ONHIDE);

  /**
   * @category Operations
   */
  public show = (): boolean => this.machine.trigger(Event.ONSHOW);

  /**
   * @category Operations
   */
  public pin = (): boolean => this.machine.trigger(Event.ONPIN);

  /**
   * @category Operations
   */
  public unpin = (): boolean => this.machine.trigger(Event.ONUNPIN);

  /**
   * @category Operations
   */
  public minimize = (): boolean => this.machine.trigger(Event.ONMINIMIZE);

  /**
   * @category Operations
   */
  public maximize = (): boolean => this.machine.trigger(Event.ONMAXIMIZE);

  /**
   * @category Operations
   */
  public restore = (): boolean => this.machine.trigger(Event.ONRESTORE);

  /**
   * @category Operations
   */
  public close = (): boolean => this.machine.trigger(Event.ONCLOSE);
}
