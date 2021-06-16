import { Container } from "./mocking/mock";
import { Page } from "./page/page";

const counterPage = new Page("counter").addRootImage(
    new Container([0, 0, 50, 50]),
);
