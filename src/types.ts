import { Component } from "./component";

export type INodes = string | Component[];

export interface IElement {
    type: string;
    key: string;
    nodes: any;
    fires?: any;
}

export interface ICallback {
    type: string;
    key: string;
    nodes: any;
    fires?: any;
}
