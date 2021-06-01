import { Component } from "../component/component";
import { IPosition } from "../component/types";

interface IHelloWorld {
    test: string;
    children?: Component[];
}

export class HelloWorld extends Component {
    constructor(position: IPosition, props?: IHelloWorld) {
        super(position, props);
    }

    mount() {
        const node = this.props.children
            ? this.props.children
            : this.props.test;
        this.compile("div", node);
    }
}
