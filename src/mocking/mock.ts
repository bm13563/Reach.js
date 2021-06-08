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
        this.compile(`
        <div>
            ${this.image(new Counter([0, 0, 50, 50]), "test")}
            ${this.image(new Counter([50, 50, 50, 50]), "test2")}
        </div>
        `);
    }
}

// interface IMenu {
//     title: string;
//     menuItems: string[];
// }

// export class Menu extends Image {
//     constructor(position: IPosition, props?: IMenu) {
//         super(position, props);
//     }

//     mount() {
//         const menuItems: string = this.props.menuItems
//             .map((menuItem: IMenu) => {
//                 return `<li><a href="#${menuItem}">${menuItem}</a></li>`;
//             })
//             .join("");

//         this.setState("title", "My menu title");

//         this.stage(`
//         <style>
//         ul {
//             list-style-type: none;
//             margin: 0;
//             padding: 0;
//             background-color: #f1f1f1;
//         }

//         li a {
//             display: block;
//             color: #000;
//             padding: 8px 16px;
//             text-decoration: none;
//         }

//         li a:hover {
//             background-color: #555;
//             color: white;
//         }
//         </style>

//         <h5>${this.state.title}</h5>

//         <ul>
//             ${menuItems}
//         </ul>
//         `);
//     }
// }

export class Counter extends Image {
    constructor(position: IPosition) {
        super(position);
        this.state = {
            count: 0,
        };
    }

    mount() {
        const aTest = () => {
            let newCount = this.state.count + 1;
            this.setState("count", newCount);
            console.log(this.state.count);
        };

        this.compile(`
        <div>
            ${this.state.count}
        </div>
        <button onClick=${this.prop(aTest)}>A nice new button</button>
        <style>
            * {font-size: 25px;}
        </style>
        `);
    }
}
