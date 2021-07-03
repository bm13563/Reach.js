import { Component } from "../component";
import { Card } from "./card";

export class Container extends Component {
    constructor() {
        super();
    }

    mount() {
        const compact = new Card({
            header: "Compact",
            text: "Reach.js is less than 1000 minified lines",
            alertType: "info",
            icon: "lightbulb",
        });

        const unopinionated = new Card({
            header: "Unopinionated",
            text: "Reach.js gives the developer complete control",
            alertType: "success",
            icon: "dove",
        });

        this.style([`.jumbotron { padding: 100px; }`]);

        this.compile(`
            <div class="jumbotron">
                <div class="row w-100">
                    ${this.child(compact)}
                    ${this.child(unopinionated)}
                </div>
            </div>
        `);
    }
}
