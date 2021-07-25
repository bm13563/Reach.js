import { init, datasetModule } from "snabbdom";
import { Component } from "./component";
import { textToNode, forkedToVNode } from "./utilities";

export class Page {
    patch: any;
    name: string;
    rootComponent: Component;
    currentTree: any;
    callbacks: any = {};

    constructor(name: string) {
        this.patch = init([datasetModule]);
        this.name = name;
    }

    addRootImage(rootComponent: Component) {
        this.rootComponent = rootComponent;
        this.rootComponent.page = this;
        this.rootComponent.mountIfNeeded();
        const node = textToNode(this.rootComponent.html);
        this.injectCallbacks(node);
        this.currentTree = forkedToVNode(node);
        document.body.appendChild(node);
        this.traverseRenderPipeline((child: Component) => {
            child.deferCallbacks.forEach((callback) => {
                callback();
            });
            child.deferCallbacks = [];
        });
        this.traverseRenderPipeline((child: Component) => {
            child.shouldMount = false;
        });
        return this;
    }

    render() {
        this.traverseRenderPipeline((child: Component) => {
            child.clearCallbacks.forEach((callback) => {
                callback();
            });
            child.deferCallbacks = [];
        });
        this.rootComponent.mountIfNeeded();
        const node = textToNode(this.rootComponent.html);
        this.injectCallbacks(node);
        const tree = forkedToVNode(node);
        this.patch(this.currentTree, tree);
        this.currentTree = tree;
        this.traverseRenderPipeline((child: Component) => {
            child.deferCallbacks.forEach((callback) => {
                callback();
            });
            child.deferCallbacks = [];
        });
        this.traverseRenderPipeline((child: Component) => {
            child.shouldMount = false;
        });
    }

    traverseRenderPipeline = (
        shouldRenderCallback,
        component = this.rootComponent,
    ) => {
        for (const [key, value] of Object.entries(component.children)) {
            // @ts-ignore
            if (value.shouldMount) {
                shouldRenderCallback(value);
                // @ts-ignore
                this.traverseRenderPipeline(shouldRenderCallback, value);
            }
        }
    };

    // TODO can we use the events functionality in snabbdom
    injectCallbacks(node: any) {
        Object.values(this.callbacks).forEach((callbackProps: any) => {
            callbackProps.forEach((callback) => {
                const element = node.querySelector(
                    `[data-${callback.callbackId}]`,
                );
                if (element) {
                    delete element.dataset[callback.callbackId];
                    for (
                        let attribute = 0;
                        attribute < element.attributes.length;
                        attribute++
                    ) {
                        const attributeName =
                            element.attributes[attribute].nodeName;
                        const attributeValue =
                            element.attributes[attribute].nodeValue;
                        if (attributeValue == callback.callbackId) {
                            element.removeAttribute(attributeName);
                            element[attributeName] = callback.callback;
                        }
                    }
                } else {
                    console.log(
                        `WARN: Unmounted component exists: ${callback.name} - ${callback.id}`,
                    );
                }
            });
        });
        this.callbacks = {};
    }
}
