import { Component } from "./component";
import { Page } from "./page";
import { createBrowserHistory } from "history";
import { locationToRoute } from "./utilities";
let history = createBrowserHistory();

export class App {
    _currentPath = window.location.pathname;
    _page: Page;
    _pageFound: boolean = false;

    route(component: Component, path: string) {
        if (this._currentPath === path) {
            this._pageFound = true;
            return new Page("test").addRootImage(component);
        } else {
            return null;
        }
    }

    notFound(component: Component) {
        if (!this._pageFound) return new Page("test").addRootImage(component);
    }
}
