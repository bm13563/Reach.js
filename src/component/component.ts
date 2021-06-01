import { IElement, INodes, IPosition } from "./types";

export abstract class Component {
    position: IPosition;
    props?: any;
    element: any;
    debug: string = "";

    constructor(position: IPosition, props?: any) {
        this.position = [...position];
        this.props = { ...props };
        this.mount();
    }

    mount(): void {
        // do nothing
    }

    compile(type: string, nodes: INodes, fires?: any): IElement {
        this.element = {
            position: this.position,
            type: type,
            nodes: nodes,
            fires: fires,
        };
        return this.element;
    }

    render(): string {
        const flexKey = Date.now() + Math.random();
        const elementKey = flexKey + 1;
        const html = `
        <div 
            class="${flexKey}"
            style="position: relative; display: flex; 
                top: ${this.position[0]}%; 
                left: ${this.position[0]}%; 
                width: ${this.position[0]}%; 
                height: ${this.position[0]}%;
                ${
                    this.debug === ""
                        ? ""
                        : "background-color: " + this.debug + ";"
                }"
        >
            <${this.element?.type} 
                class="${elementKey}" 
                style="padding: 0px; margin: 0px; 
                    top: 0%; left: 0%; width: 100%; height: 100%;"
            >
                ${
                    typeof this.element.nodes === "string"
                        ? this.element?.nodes
                        : this.element?.nodes
                              ?.map((component: Component) => {
                                  return component.render();
                              })
                              .join(" ")
                }
            </${this.element?.type}>
        </div>
        `;
        return html;
    }

    debugOn(debugColour: string) {
        this.debug = debugColour;
    }

    debugOff() {
        this.debug = "";
    }
}
