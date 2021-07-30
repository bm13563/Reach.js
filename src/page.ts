import { init } from "snabbdom";
import { Component } from "./component";
import { textToNode, forkedToVNode } from "./utilities";

export class Page {
    patch: any;
    name: string;
    currentTree: any;
    rootComponent: Component;

    constructor(name: string) {
        this.patch = init([]);
        this.name = name;
    }

    addRootImage(rootComponent: Component) {
        this.rootComponent = rootComponent;
        rootComponent.page = this;
        const html = rootComponent.mountIfNeeded();
        const reRenderedComponents = this.traverseRenderPipeline();
        const node = textToNode(html);
        this.insertEvents(reRenderedComponents, node);
        this.currentTree = forkedToVNode(node);
        document.body.appendChild(node);
        reRenderedComponents.map(this.fireDeferCallbacks);
        reRenderedComponents.map(this.resetRenderPipeline);
    }

    render() {
        const reRenderedComponents = this.traverseRenderPipeline();
        reRenderedComponents.map(this.fireFlushCallbacks);
        const html = this.rootComponent.mountIfNeeded();
        const node = textToNode(html);
        this.insertEvents(reRenderedComponents, node);
        const tree = forkedToVNode(node);
        this.patch(this.currentTree, tree);
        this.currentTree = tree;
        reRenderedComponents.map(this.fireDeferCallbacks);
        reRenderedComponents.map(this.resetRenderPipeline);
        this.rootComponent.shouldMount = true;
    }

    traverseRenderPipeline(component = this.rootComponent): Component[] {
        const reRenderedComponents = [];
        if (component.shouldMount) reRenderedComponents.push(component);
        for (const [childId, child] of Object.entries(component.children)) {
            if (child.shouldMount)
                reRenderedComponents.push(
                    ...this.traverseRenderPipeline(child),
                );
        }
        return reRenderedComponents;
    }

    fireFlushCallbacks(child: Component) {
        child.flushCallbacks.forEach((callback) => {
            callback();
        });
        child.flushCallbacks = [];
    }

    fireDeferCallbacks(child: Component) {
        child.deferCallbacks.forEach((callback) => {
            callback();
        });
        child.deferCallbacks = [];
    }

    getEventCallbacks(child: Component) {
        return child.eventCallbacks;
    }

    resetRenderPipeline(child: Component) {
        child.shouldMount = false;
    }

    insertEvents(reRenderedComponents: any, node: any) {
        const events = reRenderedComponents
            .map((child) => child.eventCallbacks)
            .reduce((acc, val) => acc.concat(val), []);
        events.forEach((event) => {
            const element = node.querySelector(`[data-${event.eventId}]`);
            if (element) {
                delete element.dataset[event.eventId];
                element[event.eventType] = event.eventCallback;
            }
        });
        reRenderedComponents.map((child) => (child.eventCallbacks = []));
    }
}
