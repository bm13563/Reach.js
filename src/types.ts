import { Component } from "./component";

export type INodes = string | Component[];

export interface IElement {
    type: string;
    key: string;
    nodes: any;
    fires?: any;
}

export interface IEventCallback {
    componentId: string;
    eventId: string;
    eventType: any;
    eventCallback: () => void;
}

export interface IBindMethods {
    delay: (callback: () => void, tracked: any[]) => void;
    css: (css: string[]) => void;
    html: (html: string) => string;
    register: (eventType: string, eventCallback: () => void) => string;
    child: (childComponent: Component) => string;
    watch: (callback: () => void, tracked: any[]) => void;
    setState: (key: string, value: any) => void;
    getState: (key: string) => any;
}
