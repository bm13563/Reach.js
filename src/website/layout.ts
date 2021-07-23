import { Component } from "../component";
import { Card } from "./flexCard";

export class Layout extends Component {
    constructor() {
        super();
    }

    mount() {
        const tinyCard = new Card({
            headerText: "Tiny!",
            bodyText: "Reach.js is less than 1000 lines of code unminified.",
            backgroundColourBase: "black",
        });

        const unopinionatedCard = new Card({
            headerText: "Flexible",
            bodyText: "Reach.js doesn't place restrictions on how you develop.",
            backgroundColourBase: "black",
        });

        const simpleCard = new Card({
            headerText: "Simple",
            bodyText:
                "Components are written in HTML / CSS, with an intuitive API.",
            backgroundColourBase: "black",
        });

        this.style([
            `.wrapper { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); height: 100vh; gap: 50px; padding-left: 20vw; padding-right: 20vw; }`,
            `.title { grid-column: 1 / 4; grid-row: 1; text-align: center; font-size: 6rem; padding-top: 100px; }`,
            `.one { grid-column: 1; grid-row: 2 / 3; }`,
            `.two { grid-column: 2; grid-row: 2 / 3; }`,
            `.three { grid-column: 3; grid-row: 2 / 3; }`,
        ]);

        this.compile(`
            <div class="wrapper">
                <div class="title">
                    Reach.js
                </div>
                <div class="one subgrid">
                    ${this.child(tinyCard)}
                </div>
                <div class="two subgrid">
                    ${this.child(unopinionatedCard)}
                </div>
                <div class="three subgrid">
                    ${this.child(simpleCard)}
                </div>
            </div>
        `);
    }
}
