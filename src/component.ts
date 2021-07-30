import { Page } from "./page";
import { generateId } from "./utilities";
import { getSync } from "stacktrace-js";

export class Component {
    id: string = generateId();
    name: string;
    page: Page;
    props?: Record<string, any>;
    state: Record<string, any> = {};
    children: Record<string, Component> = {};
    parent: Component;
    html: string = "";
    css: string = "";
    shouldMount: boolean = true;
    eventCallbacks: any = [];
    deferCallbacks: any = [];
    flushCallbacks: any = [];

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
            return this.html;
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
            <style>${this.css}</style>
            ${html}
        `;
        return this.html;
    }

    register(eventType: string, eventCallback: any) {
        const eventId = generateId();
        const eventCallbackProps = {
            componentId: this.id,
            eventId: eventId,
            eventType: eventType,
            eventCallback: eventCallback,
        };
        this.eventCallbacks.push(eventCallbackProps);
        return `data-${eventId}="${eventId}"`;
    }

    flush(callback: any) {
        this.flushCallbacks.push(callback);
    }

    defer(callback: any) {
        this.deferCallbacks.push(callback);
    }

    child(childComponent: Component): string {
        const stack = getSync();
        let key = "";
        for (let x = 0; x < stack.length; x++) {
            key = key + stack[x].columnNumber + stack[x].lineNumber;
            if (stack[x].functionName.includes("mountIfNeeded")) break;
        }
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

    elementFromDOM(selector: string) {
        return document.querySelectorAll(
            `${selector}[data-reachid="${this.id}"]`,
        );
    }
}
