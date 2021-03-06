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
            cardHeight: 0,
        };
    }

    c({ css, html, getState, register, setState }) {
        const changeState = () => {
            const newState = !getState("open");
            setState("open", newState);
        };
        const isOpen = (open: any, closed: any) => {
            return getState("open") ? open : closed;
        };

        css([
            `.wrapper {
                display: flex;
                flex-direction: column;
                padding: 10px;
                border-radius: 10px;
                border: 3px solid ${this.props.backgroundColourBase};
                text-align: center;
            }`,
            `.wrapper:hover { cursor: pointer; }`,
            `.title-wrapper { display: flex; justify-content: center; align-items: center; }`,
            `.title { font-size: 3vw; }`,
            `.title:after { 
                content: '';
                height: 3px; 
                display: block; 
                background: black; 
                transition: width 0.3s; 
                width: ${isOpen(100, 0)}%;
            }`,
            `.text { 
                padding: ${isOpen("20px 0px 20px 0px", "0px")};
                opacity: ${isOpen(1, 0)};
                max-height: ${isOpen("100px", "0px")};
                font-size: 1.5vw;
                transition: max-height 0.4s, padding 0.4s, opacity ${isOpen(
                    "0.5s",
                    "0.2s",
                )};
            }`,
        ]);

        html(`
            <div ${register("onclick", changeState)} class="wrapper">
                <div class="title-wrapper">
                    <div class="title">${this.props.headerText}</div>
                </div>
                <div class="body">
                    <div id="test" class="text">${this.props.bodyText}</div>
                </div>
            </div>
        `);
    }
}
