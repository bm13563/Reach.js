import { Page } from "../page/page";
import { IElement, INodes, IPosition } from "./types";

export class Image {
    imageId: string = "i" + `${Date.now() + Math.random()}`.replace(".", "");
    imageName: string;
    page: Page;
    position: IPosition;
    html: string = "";
    state: any = {};
    children: any = {};
    props?: any;
    debug: string = "";

    constructor(position: IPosition, props?: any) {
        this.position = [...position];
        this.props = { ...props };
        this.imageName = this.constructor.name;
    }

    mount(): any {
        // do nothing
    }

    compile(html: string) {
        const wrappedHtml = `
        <div 
            id="${this.imageId}"
            style="position: absolute;
                flex-flow: column;
                top: ${this.position[0]}%; 
                left: ${this.position[1]}%; 
                width: ${this.position[2]}%; 
                height: ${this.position[3]}%;
                ${
                    this.debug === ""
                        ? ""
                        : "background-color: " + this.debug + ";"
                }"
        >
            ${html}
        </div>
        <style>
        div#${this.imageId} {}
        </style>
        `;
        const parsedHtml = wrappedHtml
            .replace(/\s\s+/g, " ")
            .replace(/\n/g, "")
            .replace(/ </g, "<")
            .replace(/< /g, "<")
            .replace(/> /g, ">")
            .replace(/ >/g, ">");
        this.html = parsedHtml;
        return parsedHtml;
    }

    pass(callback: any) {
        const callbackId =
            "r" + `${Date.now() + Math.random()}`.replace(".", "");
        const callbackProps = {
            imageId: this.imageId,
            imageName: this.imageName,
            callbackId: callbackId,
            callback: callback,
        };
        this.imageId in this.page.callbacks
            ? this.page.callbacks[this.imageId].push(callbackProps)
            : (this.page.callbacks[this.imageId] = [callbackProps]);
        return `${callbackId} data-${callbackId}="${callbackId}"`;
    }

    image(image: Image): string {
        const error = new Error().stack;
        const errorLines = error.split("\n")[2];
        const lineNumber = errorLines.split(":").slice(-2)[0];
        const colNumber = errorLines.split(":").slice(-1)[0].replace(")", "");
        const key = `${lineNumber + colNumber}`;
        if (key in this.children) {
            this.children[key].mount();
            return this.children[key].html;
        } else {
            image.page = this.page;
            this.children[key] = image;
            image.mount();
            return image.html;
        }
    }

    getState(key: string) {
        return this.state[key];
    }

    setState(key: string, value: any) {
        this.state[key] = value;
        this.page.update();
    }

    debugOn(debugColour: string = "#ff0000") {
        this.debug = debugColour;
        return this;
    }

    debugOff() {
        this.debug = "";
        return this;
    }
}
