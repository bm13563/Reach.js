import { Page } from "./page";
import { generateId } from "./utilities";
import { getSync } from "stacktrace-js";

export class Component {
    id: string = generateId();
    name: string;
    page: Page;
    html: string = "";
    css: string = "";
    state: any = {};
    children: any = {};
    parent: Component;
    shouldMount: boolean = true;
    props?: any;

    constructor(props?: any) {
        this.props = { ...props };
        this.name = this.constructor.name;
        console.log(this.id, this.name, "id print")
    }

    mount(): any {
        // do nothing
    }

    mountIfNeeded(): string {
        if (this.shouldMount) {
            this.mount();
            this.shouldMount = false;
        } else {
            console.log(this.id, this.name, "doesnt need to render!");
            return this.html;
        }
    }

    style(css: string[]): any {
        this.css = css
            .map((attribute) => `[data-reachid="${this.id}"]${attribute}`)
            .join(" ");
    }

    compile(componentHtml: string) {
        let html = componentHtml.replace(/>/g, ` data-reachid="${this.id}">`);
        Object.keys(this.children).forEach((childKey: string) => {
            const childId = this.children[childKey].id;
            const childHtml = this.children[childKey].html;
            html = html.replace(childId, childHtml);
        });
        this.html = `
            <style>${this.css ? this.css : "{}"}</style>
            ${html}
        `;
        return this.html;
    }

    register(callback: any) {
        const callbackId = generateId();
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
        const trace = getSync()[1];
        console.log(this.name, getSync(), "trace")
        const key = `${trace.columnNumber}${trace.lineNumber}`;
        console.log(this.name, key, "key")
        if (key in this.children) {
            this.children[key].mountIfNeeded();
            return this.children[key].id;
        } else {
            childComponent.page = this.page;
            childComponent.parent = this;
            this.children[key] = childComponent;
            childComponent.mountIfNeeded();
            return childComponent.id;
        }
    }

    parentShouldMount() {
        if (this.parent) {
            this.parent.shouldMount = true;
            this.parent.parentShouldMount();
        }
    }

    getState(key: string) {
        return this.state[key];
    }

    setState(key: string, value: any) {
        this.state[key] = value;
        this.shouldMount = true;
        this.parentShouldMount();
        this.page.update();
    }
}

function getErrorObject() {
    try {
        throw Error("");
    } catch (err) {
        return err;
    }
}
