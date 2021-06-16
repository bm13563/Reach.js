import { Image } from "../image/image";
import { IPosition } from "../image/types";

interface IHelloWorld {
    child: Image;
}

export class Container extends Image {
    constructor(position: IPosition, props?: IHelloWorld) {
        super(position, props);
    }

    mount() {
        const counter1 = this.image(
            new Counter([50, 0, 50, 50], { title: "Counter 2" }).debugOn("#00ff00"),
        );

        this.compile(`
            <div>
                ${this.image(
                    new Counter([0, 0, 50, 50], { title: "Counter 1" }).debugOn(),
                )}
                ${counter1}
            </div>
        `);
    }
}

interface ICounter {
    title: string;
}

export class Counter extends Image {
    constructor(position: IPosition, props: ICounter) {
        super(position, props);
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
            <button onClick=${this.pass(aTest)}>A nice new button</button>
            <style>
                * {font-size: 25px;}
            </style>
        `);
    }
}
