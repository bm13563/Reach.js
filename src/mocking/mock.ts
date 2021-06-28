import { Component } from "../component/component";

interface IHelloWorld {
    child: Component;
}

export class Container extends Component {
    constructor(props?: IHelloWorld) {
        super(props);
    }

    mount() {
        // const counter1 = this.child(
        //     new Counter({ title: "Counter 2" }).debugOn("#00ff00"),
        // );

        this.style(`.test {
            color: white;
        }`);

        this.compile(`
            <div class="test">
                ${this.child(
                    new Counter({
                        title: "Counter 1",
                    }).debugOn(),
                )}
            </div>
        `);
    }
}

interface ICounter {
    title: string;
}

export class Counter extends Component {
    constructor(props: ICounter) {
        super(props);
        this.state = {
            ...props,
            count: 0,
        };
    }

    mount() {
        const aTest = () => {
            this.setState("count", this.getState("count") + 1);
        };

        this.compile(`
            <div>
                ${this.getState("title")}
            </div>
            <div>
                ${this.getState("count")}
            </div>
            <button onClick=${this.register(aTest)}>A nice new button</button>
            <style>
                * {font-size: 25px;}
            </style>
        `);
    }
}
