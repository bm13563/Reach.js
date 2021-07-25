import { vnode, VNode, DOMAPI, htmlDomApi } from "snabbdom";

export const generateId = () => {
    return Math.floor(Math.random() * 10000000).toString(36);
};

export const textToNode = (dom) => {
    const wrapped = `<div>${dom}</div>`;
    return new DOMParser().parseFromString(wrapped, "text/html").body
        .firstChild;
};

// forked version of toVNode function in snabbdom. updated to pull the dataset
// through from DOM nodes (instead of as an attribute as done previously)
export const forkedToVNode = (node: Node, domApi?: DOMAPI): VNode => {
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
            children.push(forkedToVNode(elmChildren[i], domApi));
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