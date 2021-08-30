import { Layout } from "./website/layout";
import { App } from "./app";
import { NotFound } from "./website/404";
import { Clock } from "./website/clock";

const app = new App();
app.notFound(new NotFound());
app.route(new Layout(), "/layout");
app.route(new Clock(), "/clock");
