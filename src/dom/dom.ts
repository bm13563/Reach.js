// @ts-ignore
var diff = require("virtual-dom/diff");
var patch = require("virtual-dom/patch");

// @ts-ignore
var createElement = require("virtual-dom/create-element");
var VNode = require("virtual-dom/vnode/vnode");
var VText = require("virtual-dom/vnode/vtext");

var convertHTML = require("html-to-vdom")({
    VNode: VNode,
    VText: VText,
});

export const imageToElement = () => {};

export const convertHTMLWithKey = (html: string) => {
    return convertHTML(
        {
            getVNodeKey: function (attributes: any) {
                return attributes.id;
            },
        },
        html,
    );
};
