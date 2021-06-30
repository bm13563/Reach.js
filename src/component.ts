import { Page } from "./page";

export class Component {
    id: string = "i" + `${Date.now() + Math.random()}`.replace(".", "");
    name: string;
    page: Page;
    html: string = "";
    css: string = "";
    state: any = {};
    children: any = {};
    debug: string = "";
    props?: any;

    constructor(props?: any) {
        this.props = { ...props };
        this.name = this.constructor.name;
    }

    mount(): any {
        // do nothing
    }

    style(css: string[]): any {
        this.css = css
            .map((attribute) => `div#${this.id} ${attribute}`)
            .join(" ");
    }

    compile(html: string) {
        this.html = `
        <div 
            id="${this.id}"
        >
            ${html}
        </div>
        <style>
            ${this.css ? this.css : "{}"}
        </style>
        `
            .replace(/\s\s+/g, " ")
            .replace(/\n/g, "")
            .replace(/ </g, "<")
            .replace(/< /g, "<")
            .replace(/> /g, ">")
            .replace(/ >/g, ">");
        return this.html;
    }

    register(callback: any) {
        const callbackId =
            "r" + `${Date.now() + Math.random()}`.replace(".", "");
        const callbackProps = {
            id: this.id,
            name: this.name,
            callbackId: callbackId,
            callback: callback,
        };
        this.id in this.page.callbacks
            ? this.page.callbacks[this.id].push(callbackProps)
            : (this.page.callbacks[this.id] = [callbackProps]);
        return `${callbackId} data-${callbackId}="${callbackId}"`;
    }

    child(childComponent: Component): string {
        const error = new Error().stack;
        const errorLines = error.split("\n")[2];
        const lineNumber = errorLines.split(":").slice(-2)[0];
        const colNumber = errorLines.split(":").slice(-1)[0].replace(")", "");
        const key = `${lineNumber + colNumber}`;
        if (key in this.children) {
            this.children[key].mount();
            return this.children[key].html;
        } else {
            childComponent.page = this.page;
            this.children[key] = childComponent;
            childComponent.mount();
            return childComponent.html;
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
