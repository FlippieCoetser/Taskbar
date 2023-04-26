/**
 * @module Taskbar
 */

/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 * @enum
 */
export const Attribute = {
  TEMPLATE: "templateId",
  VISIBLE: "visible",
  STATE: "state",
  WINDOW: "window",
  ORIENTATION: "orientation",
} as const;
/**
 * HTML Attributes available to set
 * @category Metadata: Attributes
 */
export type Attributes = (typeof Attribute)[keyof typeof Attribute];

/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 * @enum
 */
export const Visible = {
  NO: "no",
  YES: "yes",
} as const;
/**
 * Attribute only visible when set to NO
 * @category Metadata: State
 */
export type Visibility = (typeof Visible)[keyof typeof Visible];

/**
 * @category Metadata: State
 * @enum
 */
export const State = {
  PINNED: "pinned",
  UNPINNED: "unpinned",
} as const;
/**
 * @category Metadata: State
 */
export type States = (typeof State)[keyof typeof State];

/**
 * @category Metadata: State
 * @enum
 */
export const Orientation = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
} as const;
/**
 * @category Metadata: State
 */
export type Orientations = (typeof Orientation)[keyof typeof Orientation];

/**
 * @category Metadata: State
 * @enum
 */
export const Window = {
  NORMAL: "normal",
  MINIMIZED: "minimized",
  MAXIMIZED: "maximized",
  CLOSED: "closed",
};
/**
 * @category Metadata: State
 */
export type Windows = (typeof Window)[keyof typeof Window];

/**
 * @category Metadata: Behavior
 * @enum
 */
export const Operation = {
  HIDE: "hide",
  SHOW: "show",
  PIN: "pin",
  UNPIN: "unpin",
  MINIMIZE: "minimize",
  MAXIMIZE: "maximize",
  RESTORE: "restore",
  CLOSE: "close",
} as const;
/**
 * @category Metadata: Behavior
 */
export type Operations = (typeof Operation)[keyof typeof Operation];

/**
 * @category Metadata: Behavior
 * @enum
 */
export const Event = {
  ONHIDE: "onhide",
  ONSHOW: "onshow",
  ONPIN: "onpin",
  ONUNPIN: "onunpin",
  ONMINIMIZE: "onminimize",
  ONMAXIMIZE: "onmaximize",
  ONRESTORE: "onrestore",
  ONCLOSE: "onclose",
} as const;
/**
 * @category Metadata: Behavior
 */
export type Events = (typeof Event)[keyof typeof Event];

/**
 * @category Metadata: Behavior
 * @enum
 */
export const Gesture = {
  HIDE: "onhide",
  SHOW: "onshow",
  PIN: "onpin",
  UNPIN: "onunpin",
  MINIMIZE: "onminimize",
  MAXIMIZE: "onmaximize",
  RESTORE: "onrestore",
  CLOSE: "onclose",
};
/**
 * @category Metadata: Behavior
 */
export type Gestures = (typeof Gesture)[keyof typeof Gesture];

/**
 * Event handler signature
 * @category Metadata: Behavior
 */
export type Handler = (...args: any[]) => void;
