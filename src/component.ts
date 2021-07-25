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
    props?: any;
    parent: Component;
    shouldMount: boolean = true;
    eventCallbacks: any = [];
    deferCallbacks: any = [];
    clearCallbacks: any = [];

    constructor(props?: any) {
        this.props = { ...props };
        this.name = this.constructor.name;
    }

    mount(): any {
        // do nothing
    }

    mountIfNeeded(): string {
        if (this.shouldMount) {
            this.mount();
        } else {
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

    clear(callback: any) {
        this.clearCallbacks.push(callback);
    }

    defer(callback: any) {
        this.deferCallbacks.push(callback);
    }

    child(childComponent: Component): string {
        const stack = getSync();
        const finalStack = stack
            .filter((element) => {
                return "functionName" in element ? true : false;
            })
            .find((element) => {
                return element.functionName.includes("mountIfNeeded");
            });
        const index = stack.indexOf(finalStack);
        const key = stack
            .slice(0, index)
            .map((element) => {
                return `${element.columnNumber}${element.lineNumber}`;
            })
            .join("");
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

    setState(key: string, value: any, update: boolean = true) {
        this.state[key] = value;
        if (update) {
            this.shouldMount = true;
            this.parentShouldMount();
            this.page.render();
        }
    }
}
