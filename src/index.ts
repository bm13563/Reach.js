import { isInt32Array } from "util/types";
import { Container, Container1, Counter } from "./mocking/mock";
import { Page } from "./page/page";

// const menu1 = new Menu([0, 0, 50, 50], {
//     title: "My menu!",
//     menuItems: ["test1", "test2", "test3"],
// });
// menu1.debugOn("red");

// const menu2 = new Menu([0, 0, 50, 50], {
//     title: "My menu has changed",
//     menuItems: ["test1"],
// });
// menu2.debugOn("red");

// const sideContainer = new Container([0, 0, 25, 100], { children: menu1 });
// sideContainer.debugOn("blue");

// const testPage = new Page("testPage", sideContainer);

const counterPage = new Page("counter").addRootImage(
    new Container1([0, 0, 50, 50]),
);
