// import { Container } from "./mocking/container";
// import { Page } from "./page";

// const counterPage = new Page("counter").addRootImage(new Container());
// counterPage.importCSS(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
// );
// counterPage.importCSS(
//     "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
// );

// import { Container } from "./mocking/mock";
// import { Page } from "./page";
// const counterPage = new Page("counter").addRootImage(new Container());

import { Layout } from "./website/layout";
import { Page } from "./page";
import { App } from "./app";
import { NotFound } from "./website/404";

const app = new App();
app.route(new Layout(), "/layout");
app.notFound(new NotFound())
// const page = new Page("counter").addRootImage(new Layout());

// import { Page } from "./page";
// import { Component } from "./component";

// export { Page, Component };
