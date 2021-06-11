import { Page } from "../page/page";
import { IElement, INodes, IPosition } from "./types";

export class Image {
    page: Page;
    position: IPosition;
    html: string = "";
    props?: any;
    renderProps: any = {};
    debug: string = "";
    state: any = {};
    images: any = {};
    imageKey: string;

    constructor(position: IPosition, props?: any) {
        this.position = [...position];
        this.props = { ...props };
        this.imageKey = "i" + `${Date.now() + Math.random()}`.replace(".", "");
    }

    mount(): any {
        // do nothing
    }

    compile(html: string) {
        this.html = html;
        const wrappedHtml = `
        <div 
            id="${this.imageKey}"
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
            ${this.html}
        </div>
        <style>
        div#${this.imageKey} {}
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

    prop(prop: any) {
        const renderPropKey =
            "r" + `${Date.now() + Math.random()}`.replace(".", "");
        this.page.renderProps[renderPropKey] = prop;
        return renderPropKey;
    }

    image(image: Image) {
        const error = new Error().stack;
        const errorLines = error.split("\n")[2];
        const lineNumber = errorLines.split(":").slice(-2)[0];
        const colNumber = errorLines.split(":").slice(-1)[0].replace(')', '');
        const key = `${lineNumber + colNumber}`;
        if (key in this.images) {
            this.images[key].mount();
            return this.images[key].html;
        } else {
            image.page = this.page;
            this.images[key] = image;
            image.mount();
            return image.html;
        }
    }

    setState(key: string, value: any) {
        this.state[key] = value;
        this.page.update();
    }

    debugOn(debugColour: string = "#ff0000") {
        this.debug = debugColour;
    }

    debugOff() {
        this.debug = "";
    }
}
