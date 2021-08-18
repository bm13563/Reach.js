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
