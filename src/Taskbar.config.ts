/**
 * It is not possible to pass information into a web component constructor.
 * This is a know limitation of web components.
 * The configuration of the web component is therefore set via a public `configuration` property.
 * @module Taskbar
 */

import { Attribute } from "./Taskbar.metadata.js";
import { States } from "./Taskbar.metadata.js";
import { Visible } from "./Taskbar.metadata.js";
import { State } from "./Taskbar.metadata.js";
import { Event } from "./Taskbar.metadata.js";
import { Operation } from "./Taskbar.metadata.js";
import { Window } from "./Taskbar.metadata.js";
import { Orientation } from "./Taskbar.metadata.js";

export const Configuration = {
  type: "parallel",
  states: {
    visible: {
      initial: Visible.YES,
      states: {
        yes: {
          on: {
            onhide: {
              target: Visible.NO,
              actions: [Operation.HIDE],
            },
          },
        },
        no: {
          on: {
            onshow: {
              target: Visible.YES,
              actions: [Operation.SHOW],
            },
          },
        },
      },
    },
    orientation: {
      initial: Orientation.HORIZONTAL,
      states: {
        horizontal: {
          on: {},
        },
        vertical: {
          on: {},
        },
      },
    },
    state: {
      initial: State.UNPINNED,
      states: {
        unpinned: {
          on: {
            onpin: {
              target: State.PINNED,
              actions: [Operation.PIN],
            },
          },
        },
        pinned: {
          on: {
            onunpin: {
              target: State.UNPINNED,
              actions: [Operation.UNPIN],
            },
          },
        },
      },
    },
    window: {
      initial: Window.NORMAL,
      states: {
        normal: {
          on: {
            onminimize: {
              target: Window.MINIMIZED,
              actions: [Operation.MINIMIZE],
            },
            onmaximize: {
              target: Window.MAXIMIZED,
              actions: [Operation.MAXIMIZE],
            },
            onclose: {
              target: Window.CLOSED,
              actions: [Operation.CLOSE],
            },
          },
        },
        minimized: {
          on: {
            onrestore: {
              target: Window.NORMAL,
              actions: [Operation.RESTORE],
            },
            onclose: {
              target: Window.CLOSED,
              actions: [Operation.CLOSE],
            },
          },
        },
        maximized: {
          on: {
            onminimize: {
              target: Window.MINIMIZED,
              actions: [Operation.MINIMIZE],
            },
            onrestore: {
              target: Window.NORMAL,
              actions: [Operation.RESTORE],
            },
            onclose: {
              target: Window.CLOSED,
              actions: [Operation.CLOSE],
            },
          },
        },
        closed: {
          on: {},
        },
      },
    },
  },
  actions: {
    hide: (machine, state, ...args) =>
      machine.emit(Event.ONHIDE, state, ...args),
    show: (machine, state, ...args) =>
      machine.emit(Event.ONSHOW, state, ...args),
    pin: (machine, state, ...args) => machine.emit(Event.ONPIN, state, ...args),
    unpin: (machine, state, ...args) =>
      machine.emit(Event.ONUNPIN, state, ...args),
    minimize: (machine, state, ...args) =>
      machine.emit(Event.ONMINIMIZE, state, ...args),
    maximize: (machine, state, ...args) =>
      machine.emit(Event.ONMAXIMIZE, state, ...args),
    restore: (machine, state, ...args) =>
      machine.emit(Event.ONRESTORE, state, ...args),
    close: (machine, state, ...args) =>
      machine.emit(Event.ONCLOSE, state, ...args),
  },
};
