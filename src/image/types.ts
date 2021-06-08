import { Image } from "./image";

export type INodes = string | Image[];

export type IPosition = [number, number, number, number];

export interface IElement {
    type: string;
    key: string;
    nodes: any;
    fires?: any;
}
