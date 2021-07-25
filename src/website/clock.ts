import { Component } from "../component";

// testing the clear function -> can we clean up our setTimeout when we need to?

export class Clock extends Component {
    constructor() {
        super();
        this.state = {
            active: true,
            time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            colour: "black",
        };
    }

    mount() {
        // get the time, don't update - ensures that the clock is always right when restarted
        this.setState("time", `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`, false);

        if (this.getState("active")) {
            // this double renders, does it absolutely have to?
            const timer = setTimeout(() => {
                this.setState(
                    "time",
                    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                );
                this.setState("colour", "#" + ((1<<24)*Math.random() | 0).toString(16))
            }, 1000);

            this.clear(() => {
                clearTimeout(timer);
            });
        }

        this.style([
            `.test-button { 
                padding: 10px;
                border-radius: 10px;
                border: 3px solid black;
                text-align: center;
                background-color: white;
                font-size: 1.5vw;
            }`,
            `.test-button:hover {
                cursor:pointer;
                background-color: lightgray;
            }`,
            `.timer {
                color: ${this.getState("colour")}
            }`
        ])

        this.compile(`
            <div class="wrapper">
                <div class="timer">
                    ${
                        this.getState("active")
                            ? this.getState("time")
                            : "Timer stopped!"
                    }
                </div>
                <button class="test-button" onclick=${this.register( 
                    () => {this.setState("active", !this.getState("active"))}
                )}>
                    ${this.getState("active") ? "Stop timer" : "Start timer"}
                </button>
            </div>
        `);
    }
}
