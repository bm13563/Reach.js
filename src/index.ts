import { HelloWorld } from "./testing/test";

const ii = new HelloWorld([0, 0, 50, 50], { test: "ii" });
ii.debugOn("red");

const hi = new HelloWorld([50, 50, 50, 50], { test: "hi" });
hi.debugOn("blue");

const hi2 = new HelloWorld([50, 50, 50, 50], {
    test: "hi",
    children: [hi, ii],
});
hi2.debugOn("green");
console.log(hi2.render());
