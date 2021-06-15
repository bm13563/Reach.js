import { isInt32Array } from "util/types";
import { Container, Container1, Counter } from "./mocking/mock";
import { Page } from "./page/page";

const counterPage = new Page("counter").addRootImage(
    new Container1([0, 0, 50, 50]),
);
