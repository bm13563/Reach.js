import { Page } from "./page";
import { IBindMethods, IEventCallback } from "./types";

import { generateId, getKeyFromStack, isArrayDeepEqual } from "./utilities";

export class Component {
    _id: string = generateId();
    _name: string;
    _page: Page;
    props?: Record<string, any>;
    state: Record<string, any> = {};
    children: Record<string, Component> = {};
    _parent: Component;
    _shouldUpdateInNextRender: boolean = true;
    _blockRerenderWhileCompiling: boolean = false;
    _htmlCache: string = "";
    _cssCache: string = "";
    _eventCallbacks: IEventCallback[] = [];
    _deferCallbacks: (() => void)[] = [];
    _flushCallbacks: (() => void)[] = [];
    _watchTracker: Record<string, any[]> = {};
    t;
    tstate = {}

    constructor(props?: any) {
        this.props = { ...props };
        this._name = this.constructor.name;
    }

    c(fn?: IBindMethods): void {
        // do nothing
    }

    _compile(): string {
        if (this._shouldUpdateInNextRender) {
            const compileWithBoundMethods = this.c.bind(this, this._bindMethods());
            this._blockRerenderWhileCompiling = true;
            compileWithBoundMethods();
            this._blockRerenderWhileCompiling = false;
            return this._htmlCache;
        } else {
            return this._htmlCache;
        }
    }

    _bindMethods(): IBindMethods {
        return {
            defer: this.defer.bind(this),
            css: this.css.bind(this),
            html: this.html.bind(this),
            register: this.register.bind(this),
            child: this.child.bind(this),
            watch: this.watch.bind(this),
            setState: this.setState.bind(this),
            getState: this.getState.bind(this),
        };
    }

    _addToRenderPipeline(): void {
        this._shouldUpdateInNextRender = true;
        if (this._parent) {
            this._parent._addToRenderPipeline();
        }
    }

    css(css: string[]): void {
        this._cssCache = css
            .map((attribute) => {
                const formattedCss = attribute.split(" {");
                return `${formattedCss[0]}[data-reachid="${this._id}"] {${formattedCss[1]}`;
            })
            .join(" ");
    }

    html(html: string): string {
        let formattedHtml = html.replace(/>/g, ` data-reachid="${this._id}">`);
        Object.keys(this.children).forEach((childKey: string) => {
            const childId = this.children[childKey]._id;
            const childHtml = this.children[childKey]._htmlCache;
            formattedHtml = formattedHtml.replace(childId, childHtml);
        });
        this._htmlCache = `
            <style data-reachid="${this._id}-style">${this._cssCache}</style>
            ${formattedHtml}
        `;
        return this._htmlCache;
    }

    register(eventType: string, eventCallback: () => void): string {
        const eventId = generateId();
        const eventCallbackProps: IEventCallback = {
            componentId: this._id,
            eventId: eventId,
            eventType: eventType,
            eventCallback: eventCallback,
        };
        this._eventCallbacks.push(eventCallbackProps);
        return `data-${eventId}="${eventId}"`;
    }

    flush(callback: () => void): void {
        this._flushCallbacks.push(callback);
    }

    defer(callback: () => void): void {
        console.log(this);
        this._deferCallbacks.push(callback);
    }

    watch(callback: () => void, tracked: any[]): void {
        const key = getKeyFromStack("compile");
        if (key in this._watchTracker) {
            if (!isArrayDeepEqual(tracked, this._watchTracker[key])) {
                this._watchTracker[key] = tracked;
                callback();
            }
        } else {
            this._watchTracker[key] = tracked;
        }
    }

    child(childComponent: Component): string {
        const key = getKeyFromStack("compile");
        if (key in this.children) {
            this.children[key]._compile();
            return this.children[key]._id;
        } else {
            childComponent._page = this._page;
            childComponent._parent = this;
            this.children[key] = childComponent;
            childComponent._compile();
            return childComponent._id;
        }
    }

    getState(key: string): any {
        return this.state[key];
    }

    setState(key: string, value: any): void {
        this.state[key] = value;
        if (this._blockRerenderWhileCompiling) return;
        this._shouldUpdateInNextRender = true;
        this._addToRenderPipeline();
        this._page._render();
    }
}
