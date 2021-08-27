import { Component } from "../component";

export class Clock extends Component {
    constructor() {
        super();
        this.state = {
            active: true,
            time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            colour: "black",
            test: 0,
        };
    }
    
    c() {
        this.watch(() => {
            this.setState(
                "time",
                `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
            );
            this.setState("test", this.getState("test") + 1);
        }, [this.getState("active")]);

        this.defer(() => {
            if (this.getState("active")) {
                const timer = setTimeout(() => {
                    this.setState(
                        "time",
                        `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                    );
                }, 1000);

                this.flush(() => {
                    clearTimeout(timer);
                });
            }
        });

        this.css([
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
            }`,
        ]);

        this.html(`
            <div class="wrapper">
                <div class="timer">
                    ${
                        this.getState("active")
                            ? this.getState("time")
                            : "Timer stopped!"
                    }
                </div>
                <button class="test-button" ${this.register("onclick", () => {
                    this.setState("active", !this.getState("active"));
                })}>
                    ${this.getState("active") ? "Stop timer" : "Start timer"}
                </button>
            </div>
        `);
    }
}
