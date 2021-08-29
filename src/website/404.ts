import { Component } from "../component";

export class NotFound extends Component {
    constructor() {
        super();
    }

    c() {
        this.html(`
            <div>Page not found!</div>
        `)
    }
}