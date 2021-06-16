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

import { Image } from "../image/image";
import { IPosition } from "../image/types";

export class Page {
    name: string;
    rootImage: Image;
    currentNode: HTMLElement;
    currentTree: any;
    newTree: any;
    callbacks: any = {};

    constructor(name: string) {
        this.name = name;
    }

    addRootImage(image: Image) {
        this.rootImage = image;
        this.rootImage.page = this;
        this.rootImage.mount();
        this.newTree = this.convertHTMLWithKey(this.rootImage.html);
        this.currentNode = createElement(this.newTree[0]);
        document.body.appendChild(this.currentNode);
        this.injectCallbacks();
        this.currentTree = this.newTree;
    }

    update() {
        this.rootImage.mount();
        this.newTree = this.convertHTMLWithKey(this.rootImage.html);
        this.render();
    }

    render() {
        const patches = diff(this.currentTree[0], this.newTree[0]);
        this.currentNode = patch(this.currentNode, patches);
        this.injectCallbacks();
        this.currentTree = this.newTree;
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
                        `WARN: Unmounted component exists: ${callback.imageName} - ${callback.imageId}`,
                    );
                }
            });
        });
        this.callbacks = {};
    }
}
