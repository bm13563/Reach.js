import { init, toVNode } from "snabbdom";
import { Component } from "./component";

const patch = init([]);

export class Page {
    name: string;
    rootComponent: Component;
    currentNode: any;
    currentTree: any;
    callbacks: any = {};

    constructor(name: string) {
        this.name = name;
    }

    addRootImage(rootComponent: Component) {
        this.rootComponent = rootComponent;
        this.rootComponent.page = this;
        this.rootComponent.mount();
        this.currentNode = this.textToNode(this.rootComponent.html);
        this.injectCallbacks(this.currentNode);
        this.currentTree = toVNode(this.currentNode);
        document.body.appendChild(this.currentNode);
        return this;
    }

    update() {
        this.rootComponent.mount();
        this.render();
    }

    render() {
        const node = this.textToNode(this.rootComponent.html);
        this.injectCallbacks(node);
        const tree = toVNode(node);
        patch(this.currentTree, tree);
        this.currentTree = tree;
    }

    textToNode(dom) {
        return new DOMParser().parseFromString(dom, "text/html").body
            .firstChild;
    }

    // adds callbacks (e.g event listeners) to the DOM once it has been reconciled and rendered.
    // goes through the callbacks object, finds the element by the callbackId, checks if the
    // value of the element's attributes matches the callback id
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
