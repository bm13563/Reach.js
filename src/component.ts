import { Page } from "./page";
import { generateId } from "./utilities";

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
        // TODO how reliable is this?
        this.css = css
            .map((attribute) =>
                attribute.replace(" {", `[data-reachid="${this.id}"] {`),
            )
            .join(" ");
    }

    compile(html: string) {
        this.html = `
            <style>${this.css ? this.css : "{}"}</style>
            ${html}
        `;
        // TODO this works but is potentially kinda janky and slow
        this.html = this.html.replace(/>/g, ` data-reachid=${this.id}>`);
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
        const error = new Error().stack;
        const errorLines = error.split("\n")[2];
        const lineNumber = errorLines.split(":").slice(-2)[0];
        const colNumber = errorLines.split(":").slice(-1)[0].replace(")", "");
        const key = `${lineNumber + colNumber}`;
        if (key in this.children) {
            this.children[key].mountIfNeeded();
            return this.children[key].html;
        } else {
            childComponent.page = this.page;
            childComponent.parent = this;
            this.children[key] = childComponent;
            childComponent.mountIfNeeded();
            return childComponent.html;
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

    parentShouldMount() {
        if (this.parent) {
            this.parent.shouldMount = true;
            this.parent.parentShouldMount();
        }
    }
}
