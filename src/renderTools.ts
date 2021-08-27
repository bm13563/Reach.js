import { Component } from "./component";
import { IEventCallback } from "./types";

export const _traverseRenderPipeline = (component: Component): Component[] => {
    const reRenderedComponents = [];
    if (component._shouldUpdateInNextRender)
        reRenderedComponents.push(component);
    for (const [childId, child] of Object.entries(component.children)) {
        if (child._shouldUpdateInNextRender)
            reRenderedComponents.push(..._traverseRenderPipeline(child));
    }
    return reRenderedComponents;
};

export const _fireFlushCallbacks = (child: Component): void => {
    for (let x = child._flushCallbacks.length - 1; x >= 0; x--) {
        const callback = child._flushCallbacks[x];
        child._flushCallbacks.splice(x, 1);
        callback();
    }
};

export const _fireDeferCallbacks = (child: Component): void => {
    for (let x = child._deferCallbacks.length - 1; x >= 0; x--) {
        const callback = child._deferCallbacks[x];
        child._deferCallbacks.splice(x, 1);
        callback();
    }
};

export const _resetRenderPipeline = (child: Component): void => {
    child._shouldUpdateInNextRender = false;
};

export const _insertEvents = (
    reRenderedComponents: Component[],
    node: ChildNode,
): void => {
    const events = reRenderedComponents
        .map((child: Component) => child._eventCallbacks)
        .reduce(
            (acc: IEventCallback[], val: IEventCallback[]) => acc.concat(val),
            [],
        );
    events.forEach((event: IEventCallback) => {
        const element = (<Element>node.parentNode).querySelector(
            `[data-${event.eventId}]`,
        );
        if (element) {
            if (element instanceof HTMLElement) {
                delete element.dataset[event.eventId];
            }
            element[event.eventType] = event.eventCallback;
        }
    });
    reRenderedComponents.map((child) => (child._eventCallbacks = []));
};
