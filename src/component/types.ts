import { Component } from "./component";

export type INodes = string | Component[];

export type IPosition = [number, number, number, number];

export interface IElement {
    type: string;
    key: string;
    nodes: any;
    fires?: any;
}
