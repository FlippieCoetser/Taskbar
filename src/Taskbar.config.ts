/**
* It is not possible to pass information into a web component constructor.
* This is a know limitation of web components.
* The configuration of the web component is therefore set via a public `configuration` property.
* @module Taskbar
*/

import { IConfiguration } from "@browser-modules/machine";

import * as Taskbar from "./Taskbar.metadata.js"

export const Configuration: 
    IConfiguration<
        Taskbar.Attribute,
        Taskbar.States,
        Taskbar.Event> = {
    type: 'parallel',
    states :{
        [Taskbar.Attribute.VISIBLE]:{
            initial: Taskbar.Visible.YES,
            states: {
                [Taskbar.Visible.YES]:{
                    on:{
                        [Taskbar.Event.ONHIDE]: {
                            target: Taskbar.Visible.NO,
                            actions: [Taskbar.Operation.HIDE]
                        }
                    }
                },
                [Taskbar.Visible.NO]:{
                    on:{
                        [Taskbar.Event.ONSHOW]: {
                            target: Taskbar.Visible.YES,
                            actions: [Taskbar.Operation.SHOW]
                        }
                    }
                }
            }
        },
        [Taskbar.Attribute.ORIENTATION]:{
            initial: Taskbar.Orientation.HORIZONTAL,
            states: {
                [Taskbar.Orientation.HORIZONTAL]: {
                    on: {

                    }
                },
                [Taskbar.Orientation.VERTICAL]: {
                    on: {

                    }
                }
            }
        },
        [Taskbar.Attribute.STATE]: {
            initial: Taskbar.State.UNPINNED,
            states: {
                [Taskbar.State.UNPINNED]: {
                    on: {
                        [Taskbar.Event.ONPIN]: {
                            target: Taskbar.State.PINNED,
                            actions: [Taskbar.Operation.PIN]
                        }
                    }
                },
                [Taskbar.State.PINNED]: {
                    on: {
                        [Taskbar.Event.ONUNPIN]: {
                            target: Taskbar.State.UNPINNED,
                            actions: [Taskbar.Operation.UNPIN]
                        }
                    }
                }
            }
        },
        [Taskbar.Attribute.WINDOW]:{ 
            initial: Taskbar.Window.NORMAL,
            states: {
                [Taskbar.Window.NORMAL]: {
                    on: {
                        [Taskbar.Event.ONMINIMIZE]: {
                            target: Taskbar.Window.MINIMIZED,
                            actions: [Taskbar.Operation.MINIMIZE]
                        },
                        [Taskbar.Event.ONMAXIMIZE]: {
                            target: Taskbar.Window.MAXIMIZED,
                            actions: [Taskbar.Operation.MAXIMIZE]
                        },
                        [Taskbar.Event.ONCLOSE]: {
                            target: Taskbar.Window.CLOSED,
                            actions: [Taskbar.Operation.CLOSE]
                        }
                    }
                },
                [Taskbar.Window.MINIMIZED]: {
                    on: {
                        [Taskbar.Event.ONRESTORE]: {
                            target: Taskbar.Window.NORMAL,
                            actions: [Taskbar.Operation.RESTORE]
                        },
                        [Taskbar.Event.ONCLOSE]: {
                            target: Taskbar.Window.CLOSED,
                            actions: [Taskbar.Operation.CLOSE]
                        }
                    }
                },
                [Taskbar.Window.MAXIMIZED]: {
                    on: {
                        [Taskbar.Event.ONMINIMIZE]: {
                            target: Taskbar.Window.MINIMIZED,
                            actions: [Taskbar.Operation.MINIMIZE]
                        },
                        [Taskbar.Event.ONRESTORE]: {
                            target: Taskbar.Window.NORMAL,
                            actions: [Taskbar.Operation.RESTORE]
                        },
                        [Taskbar.Event.ONCLOSE]: {
                            target: Taskbar.Window.CLOSED,
                            actions: [Taskbar.Operation.CLOSE]
                        }
                    }
                },
                [Taskbar.Window.CLOSED]: {
                    on:{}
                }
            } 
        }
    },
    actions: {
        [Taskbar.Operation.HIDE]:(machine, state, ...args) => 
            machine.emit(Taskbar.Event.ONHIDE, state, ...args),
        [Taskbar.Operation.SHOW]:(machine, state, ...args) => 
            machine.emit(Taskbar.Event.ONSHOW, state, ...args),
        [Taskbar.Operation.PIN]:(machine, state, ...args) => 
            machine.emit(Taskbar.Event.ONPIN, state, ...args),
        [Taskbar.Operation.UNPIN]:(machine, state, ...args) => 
            machine.emit(Taskbar.Event.ONUNPIN, state, ...args),
        [Taskbar.Operation.MINIMIZE]:(machine, state, ...args) => 
            machine.emit(Taskbar.Event.ONMINIMIZE, state, ...args),
        [Taskbar.Operation.MAXIMIZE]:(machine, state, ...args) => 
            machine.emit(Taskbar.Event.ONMAXIMIZE, state, ...args),
        [Taskbar.Operation.RESTORE]:(machine, state, ...args) => 
            machine.emit(Taskbar.Event.ONRESTORE, state, ...args),
        [Taskbar.Operation.CLOSE]:(machine, state, ...args) => 
            machine.emit(Taskbar.Event.ONCLOSE, state, ...args)
    }
}