import { init } from "snabbdom";
import { Component } from "./component";
import {
    _insertEvents,
    _fireDeferCallbacks,
    _resetRenderPipeline,
    _fireFlushCallbacks,
    _traverseRenderPipeline,
} from "./renderTools";
import { textToNode, forkedToVNode } from "./utilities";

export class Page {
    _patch: any;
    name: string;
    _currentTree: any;
    _rootComponent: Component;

    constructor(name: string) {
        this._patch = init([]);
        this.name = name;
    }

    addRootImage(rootComponent: Component) {
        this._rootComponent = rootComponent;
        rootComponent._page = this;
        const html = rootComponent._compile();
        const reRenderedComponents = _traverseRenderPipeline(
            this._rootComponent,
        );
        const node = textToNode(html);
        _insertEvents(reRenderedComponents, node);
        this._currentTree = forkedToVNode(node);
        document.body.appendChild(node);
        reRenderedComponents.map(_fireDeferCallbacks);
        reRenderedComponents.map(_resetRenderPipeline);
    }

    _render() {
        const reRenderedComponents = _traverseRenderPipeline(
            this._rootComponent,
        );
        reRenderedComponents.map(_fireFlushCallbacks);
        const html = this._rootComponent._compile();
        const node = textToNode(html);
        _insertEvents(reRenderedComponents, node);
        const tree = forkedToVNode(node);
        this._patch(this._currentTree, tree);
        this._currentTree = tree;
        reRenderedComponents.map(_fireDeferCallbacks);
        reRenderedComponents.map(_resetRenderPipeline);
    }
}
