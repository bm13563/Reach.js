import { HelloWorld } from "./testing/test";

const ii = new HelloWorld([0, 0, 25, 25], { test: "ii" });
ii.debugOn("red");

const hi = new HelloWorld([25, 25, 25, 25], { test: "hi" });
hi.debugOn("blue");

const hi4 = new HelloWorld([25, 25, 50, 50], { test: "hi" });
hi4.debugOn("orange");

const hi3 = new HelloWorld([25, 50, 50, 75], { test: "hi", children: [hi4] });
hi3.debugOn("yellow");

const hi2 = new HelloWorld([25, 25, 50, 50], {
    test: "hi",
    children: [hi, ii, hi3],
});
hi2.debugOn("green");
console.log(hi2.render());
