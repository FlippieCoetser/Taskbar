/**
* @module Taskbar
*/

/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 */
export enum Attribute {
    TEMPLATE    = 'templateId',
    VISIBLE     = 'visible',
    STATE       = 'state',
    WINDOW      = 'window',
    ORIENTATION = 'orientation'
}

/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 */
export enum Visible {
    NO  = 'no',
    YES = 'yes'
}

/**
* @category Metadata: State
*/
export enum State {
    PINNED   = 'pinned', 
    UNPINNED = 'unpinned'
}

/**
* @category Metadata: Orientation
*/
export enum Orientation {
    HORIZONTAL = 'horizontal', 
    VERTICAL   = 'vertical'
}

/**
* @category Metadata: Window
*/
export enum Window {
    NORMAL    = 'normal',
    MINIMIZED = 'minimized',
    MAXIMIZED = 'maximized',
    CLOSED    = 'closed'
}

/**
* @category Metadata: State
*/
export type States = Visible | Orientation | State | Window


/**
* @category Metadata: Behavior
*/
export enum Operation {
    HIDE     = 'hide',
    SHOW     = 'show',
    PIN      = 'pin',
    UNPIN    = 'unpin',
    MINIMIZE = 'minimize',
    MAXIMIZE = 'maximize',
    RESTORE  = 'restore',
    CLOSE    = 'close',
}

/**
* @category Metadata: Behavior
*/
export enum Event {
    ONHIDE     = 'onhide',
    ONSHOW     = 'onshow', 
    ONPIN      = 'onpin', 
    ONUNPIN    = 'onunpin',
    ONMINIMIZE = 'onminimize',
    ONMAXIMIZE = 'onmaximize',
    ONRESTORE  = 'onrestore',
    ONCLOSE    = 'onclose'
}

export enum Gesture {
    HIDE    = 'onhide',
    SHOW    = 'onshow',
    PIN     = 'onpin',
    UNPIN   = 'onunpin',
    MINIMIZE= 'onminimize',
    MAXIMIZE= 'onmaximize',
    RESTORE = 'onrestore',
    CLOSE   = 'onclose'
}

/**
* Event handler signature
* @category Interfaces
*/
export type Handler = (...args: any[]) => void
