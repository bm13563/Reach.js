import { Image } from "../image/image";
import { IPosition } from "../image/types";

interface IHelloWorld {
    child: Image;
}

export class Container1 extends Image {
    constructor(position: IPosition, props?: IHelloWorld) {
        super(position, props);
    }

    mount() {
        this.compile(`
        <div>
            ${this.image(new Container([0, 0, 100, 100]))}
        </div>
        `);
    }
}

export class Container extends Image {
    constructor(position: IPosition, props?: IHelloWorld) {
        super(position, props);
    }

    mount() {
        this.compile(`
            <div>
                ${this.image(
                    new Counter([0, 0, 50, 50], { title: "Counter 1" }),
                )}
                ${this.image(
                    new Counter([50, 50, 50, 50], { title: "Counter 2" }),
                )}
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
