import { Component } from "../component";

interface ICard {
    headerText: string;
    bodyText: string;
    backgroundColourBase: string;
}

export class Card extends Component {
    constructor(props: ICard) {
        super(props);
        this.state = {
            open: false,
        };
    }

    mount() {
        const changeState = () => {
            const newState = !this.getState("open");
            this.setState("open", newState);
        };

        const cardHeight = () => {
            return this.getState("open") ? 100 : 50;
        }

        this.style([
            `.wrapper {
                text-align: center; border-radius: 10px; height: 100%; 
                border: 3px solid ${this.props.backgroundColourBase}; height: ${cardHeight()}%; 
                transition: height 0.2s;
            }`,
            `.wrapper:hover { cursor: pointer; }`,
            `.title { font-size: 3vw; padding: 10px; margin-top: 30px; }`,
            `.body { margin: 15px 5px 15px 5px; }`,
            `.text { font-size: 1.5vw;  }`,
            `.hidden { 
                visibility: ${this.getState("open") ? "visible" : "hidden"}; 
                transition: visibility: ${this.getState("open") ? 0 : 0.2} 
            }`,
        ]);

        this.compile(`
            <div onclick=${this.register(changeState)} class="wrapper">
                <div class="title">${this.props.headerText}</div>
                <div class="body">
                    <div class="text${
                        this.getState("open") ? "" : " hidden"
                    }">${this.props.bodyText}</div>
                </div>
            </div>
        `);
    }
}