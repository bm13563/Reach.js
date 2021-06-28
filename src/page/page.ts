// @ts-ignore
var diff = require("virtual-dom/diff");
var patch = require("virtual-dom/patch");
var createElement = require("virtual-dom/create-element");
var VNode = require("virtual-dom/vnode/vnode");
var VText = require("virtual-dom/vnode/vtext");

var convertHTML = require("html-to-vdom")({
    VNode: VNode,
    VText: VText,
});

import { Component } from "../component/component";

export class Page {
    name: string;
    rootComponent: Component;
    currentNode: HTMLElement;
    currentTree: any;
    callbacks: any = {};

    constructor(name: string) {
        this.name = name;
    }

    addRootImage(rootComponent: Component) {
        this.rootComponent = rootComponent;
        this.rootComponent.page = this;
        this.rootComponent.mount();
        this.currentTree = this.convertHTMLWithKey(this.rootComponent.html);
        this.currentNode = createElement(this.currentTree[0]);
        document.body.appendChild(this.currentNode);
        this.injectCallbacks();
    }

    update() {
        this.rootComponent.mount();
        this.render();
    }

    render() {
        const newTree = this.convertHTMLWithKey(this.rootComponent.html);
        const patches = diff(this.currentTree[0], newTree[0]);
        this.currentNode = patch(this.currentNode, patches);
        this.currentTree = newTree;
        this.injectCallbacks();
    }

    convertHTMLWithKey(html: string) {
        return convertHTML(
            {
                getVNodeKey: function (attributes: any) {
                    return attributes.id;
                },
            },
            html,
        );
    }

    // adds callbacks (e.g event listeners) to the DOM once it has been reconciled and rendered.
    // goes through the callbacks object, finds the element by the callbackId, checks if the
    // value of the element's attributes matches the callback id
    injectCallbacks() {
        Object.values(this.callbacks).forEach((callbackProps: any) => {
            callbackProps.forEach((callback) => {
                const element = document.querySelector(
                    `[data-${callback.callbackId}]`,
                );
                if (element) {
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
