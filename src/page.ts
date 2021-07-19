import { init, toVNode, vnode, datasetModule } from "snabbdom";
import { Component } from "./component";

const patch = init([datasetModule]);

export class Page {
    name: string;
    rootComponent: Component;
    currentTree: any;
    callbacks: any = {};

    constructor(name: string) {
        this.name = name;
    }

    addRootImage(rootComponent: Component) {
        this.rootComponent = rootComponent;
        this.rootComponent.page = this;
        this.rootComponent.mountIfNeeded();
        const node = this.textToNode(this.rootComponent.html);
        this.injectCallbacks(node);
        this.currentTree = toVNode(node);
        document.body.appendChild(node);
        return this;
    }

    update() {
        this.rootComponent.mountIfNeeded();
        this.render();
    }

    render() {
        const node = this.textToNode(this.rootComponent.html);
        this.injectCallbacks(node);
        const tree = toVNode(node);
        this.addDataset(tree);
        // // @ts-ignore
        // console.log(
        //     // @ts-ignore
        //     tree.children[3].children[3].children[3].children[3].children[1]
        //         .elm,
        // );
        patch(this.currentTree, tree);
        // @ts-ignore
        // console.log(
        //     // @ts-ignore
        //     tree.children[3].children[3].children[3].children[3].children[1]
        //         .elm,
        // );
        this.currentTree = tree;
    }

    // TODO this should be a utility function
    textToNode(dom) {
        const wrapped = `<div>${dom}</div>`;
        return new DOMParser().parseFromString(wrapped, "text/html").body
            .firstChild;
    }

    // TODO this needs validation to check that "data-" definitely refers to
    // a dataset rather than some janky attribute
    addDataset(tree) {
        // datasets get stored in attrs by toVNode
        if (Object.keys(tree.data.attrs).length > 0) {
            Object.keys(tree.data.attrs).forEach((key: string) => {
                if (key.includes("data-")) {
                    if ("dataset" in tree.data) {
                        tree.data["dataset"][key.replace("data-", "")] =
                            tree.data.attrs[key];
                    } else {
                        tree.data["dataset"] = {};
                        tree.data["dataset"][key.replace("data-", "")] =
                            tree.data.attrs[key];
                    }
                }
            });
        }
        tree.children.forEach((child) => {
            if (child.data && "attrs" in child.data) {
                this.addDataset(child);
            }
        });
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

    importCSS(cdn: string) {
        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", cdn);
        document.head.appendChild(link);
    }
}
