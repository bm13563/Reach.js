import { Component } from "../component";

interface IHelloWorld {
    child: Component;
}

export class Container extends Component {
    constructor(props?: IHelloWorld) {
        super(props);
    }

    mount() {
        const counter1 = this.child(new Counter({ title: "Counter 2" }));
        this.compile(`
            <div class="test">
                ${this.child(
                    new Counter({
                        title: "Counter 1",
                    }),
                )}
                ${counter1}
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
            colour: ["black", "red", "green", "yellow", "blue"],
        };
    }

    mount() {
        const increment = () => {
            this.setState("count", this.getState("count") + 1);
        };

        const changeColour = (count: number): string => {
            const colourIndex = count % this.getState("colour").length;
            return this.getState("colour")[colourIndex];
        };

        this.style([
            `* { font-size: 25px; }`,
            `.counter { color: ${changeColour(this.getState("count"))}; }`,
        ]);

        this.compile(`
            <div>
                <div>
                    ${this.getState("title")}
                </div>
                <div class="counter">
                    ${this.getState("count")}
                </div>
                <button onClick=${this.register(
                    increment,
                )}>A nice new button</button>
            </div>
        `);
    }
}
