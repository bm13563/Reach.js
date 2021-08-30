import { Component } from "./component";
import { Page } from "./page";

export class App {
    _pageFound: boolean = false;

    route(component: Component, path: string) {
        if (window.location.pathname === path) {
            this._pageFound = true;
            new Page("test").addRootImage(component);
        }
    }

    notFound(component: Component) {
        if (!this._pageFound) new Page("test").addRootImage(component);
    }
}
