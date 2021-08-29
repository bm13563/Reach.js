import { vnode, VNode, DOMAPI, htmlDomApi } from "snabbdom";
import { diff } from "just-diff";
import { getSync } from "stacktrace-js";
import { parse } from "querystringify";

export const _generateId = (): string => {
    return Math.floor(Math.random() * 10000000).toString(36);
};

export const _textToNode = (domString: string): ChildNode => {
    const wrapped = `<div>${domString}</div>`;
    return new DOMParser().parseFromString(wrapped, "text/html").body
        .firstChild;
};

export const _getKeyFromStack = (stackEnd: string): string => {
    const stack = getSync();
    let key = "";
    for (let x = 0; x < stack.length; x++) {
        key = key + stack[x].columnNumber + stack[x].lineNumber;
        if (stack[x].functionName.includes(stackEnd)) break;
    }
    return key;
};

export const _isArrayDeepEqual = (x: any[], y: any[]) =>
    diff(x, y).length === 0;

// forked version of toVNode function in snabbdom. updated to pull the dataset
// through from DOM nodes (instead of as an attribute as done previously)
export const _forkedToVNode = (node: Node, domApi?: DOMAPI): VNode => {
    const api: DOMAPI = domApi !== undefined ? domApi : htmlDomApi;
    let text: string;
    if (api.isElement(node)) {
        const id = node.id ? "#" + node.id : "";
        const cn = node.getAttribute("class");
        const c = cn ? "." + cn.split(" ").join(".") : "";
        const sel = api.tagName(node).toLowerCase() + id + c;
        const attrs: any = {};
        const children: VNode[] = [];
        let name: string;
        let i: number, n: number;
        const elmAttrs = node.attributes;
        // updated here
        let dataset = {};
        if (node instanceof HTMLElement) {
            dataset = node.dataset;
        }
        const elmChildren = node.childNodes;
        for (i = 0, n = elmAttrs.length; i < n; i++) {
            name = elmAttrs[i].nodeName;
            if (name !== "id" && name !== "class") {
                attrs[name] = elmAttrs[i].nodeValue;
            }
        }
        for (i = 0, n = elmChildren.length; i < n; i++) {
            // updated here
            children.push(_forkedToVNode(elmChildren[i], domApi));
        }
        // updated here
        return vnode(sel, { attrs, dataset }, children, undefined, node);
    } else if (api.isText(node)) {
        text = api.getTextContent(node) as string;
        return vnode(undefined, undefined, undefined, text, node);
    } else if (api.isComment(node)) {
        text = api.getTextContent(node) as string;
        return vnode("!", {}, [], text, node as any);
    } else {
        return vnode("", {}, [], undefined, node as any);
    }
};

export function locationToRoute(location) {
    // location comes from the history package
    return {
        path: location.pathname,
        hash: location.hash,
        query: parse(location.search),
    };
}
