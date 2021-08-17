import { Component } from "./component";

export const _traverseRenderPipeline = (component: Component): Component[] => {
    const reRenderedComponents = [];
    if (component._recompile) reRenderedComponents.push(component);
    for (const [childId, child] of Object.entries(component.children)) {
        if (child._recompile)
            reRenderedComponents.push(..._traverseRenderPipeline(child));
    }
    return reRenderedComponents;
};

export const _fireFlushCallbacks = (child: Component): void => {
    child._flushCallbacks.forEach((callback) => {
        callback();
    });
    child._flushCallbacks = [];
};

export const _fireDeferCallbacks = (child: Component): void => {
    child._deferCallbacks.forEach((callback) => {
        callback();
    });
    child._deferCallbacks = [];
};

export const _resetRenderPipeline = (child: Component): void => {
    child._recompile = false;
};

export const _insertEvents = (reRenderedComponents: any, node: any): void => {
    const events = reRenderedComponents
        .map((child: Component) => child._eventCallbacks)
        .reduce((acc, val) => acc.concat(val), []);
    events.forEach((event) => {
        const element = node.querySelector(`[data-${event.eventId}]`);
        if (element) {
            delete element.dataset[event.eventId];
            element[event.eventType] = event.eventCallback;
        }
    });
    reRenderedComponents.map((child) => (child.eventCallbacks = []));
};
