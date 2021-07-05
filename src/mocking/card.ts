import { Component } from "../component";

interface ICard {
    header: string;
    text: string;
    alertType: string;
    icon: string;
}

export class Card extends Component {
    constructor(props: ICard) {
        super(props);
    }

    mount() {
        this.style([
            `.holder { min-wdtih:175px; }`,
            `.my-card { position:absolute; left:40%; top:-20px; }`,
        ]);

        this.compile(`
            <div class="col-md-3 holder">
                <div class="card border-${this.props.alertType} mx-sm-1 p-3">
                    <div class="card border-${this.props.alertType} shadow text-${this.props.alertType} p-3 my-card" >
                        <span class="fa fa-${this.props.icon}" aria-hidden="true"></span>
                    </div>
                    <div class="text-${this.props.alertType} text-center mt-3">
                        <h4>${this.props.header}</h4>
                    </div>
                    <div class="text-${this.props.alertType} text-center mt-2">
                        <h5>${this.props.text}</h5>
                    </div>
                </div>
            </div>
        `);
    }
}
