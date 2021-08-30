import { init, VNode } from "snabbdom";
import { Component } from "./component";
import {
    _insertEvents,
    _fireDeferCallbacks,
    _resetRenderPipeline,
    _fireFlushCallbacks,
    _traverseRenderPipeline,
} from "./renderTools";
import { _textToNode, _forkedToVNode } from "./utilities";

export class Page {
    name: string;
    _patch: (oldVnode: VNode | Element, vnode: VNode) => VNode;
    _currentTree: VNode;
    _rootComponent: Component;

    constructor(name: string) {
        this._patch = init([]);
        this.name = name;
    }

    addRootImage(rootComponent: Component): void {
        // ensures that pages are mutually exclusive
        document.body.innerHTML = "";
        const test = _textToNode("<div></div>");
        this._currentTree = _forkedToVNode(test);
        document.body.appendChild(test);
        this._rootComponent = rootComponent;
        rootComponent._page = this;
        const html = rootComponent._compile();
        const reRenderedComponents = _traverseRenderPipeline(
            this._rootComponent,
        );
        const node = _textToNode(html);
        _insertEvents(reRenderedComponents, node);
        this._currentTree = _forkedToVNode(node);
        document.body.appendChild(node);
        reRenderedComponents.map(_fireDeferCallbacks);
        reRenderedComponents.map(_resetRenderPipeline);
    }

    _render(): void {
        const reRenderedComponents = _traverseRenderPipeline(
            this._rootComponent,
        );
        reRenderedComponents.map(_fireFlushCallbacks);
        const html = this._rootComponent._compile();
        const node = _textToNode(html);
        _insertEvents(reRenderedComponents, node);
        const tree = _forkedToVNode(node);
        this._patch(this._currentTree, tree);
        this._currentTree = tree;
        reRenderedComponents.map(_fireDeferCallbacks);
        reRenderedComponents.map(_resetRenderPipeline);
    }
}
