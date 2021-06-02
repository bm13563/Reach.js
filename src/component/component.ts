import { IElement, INodes, IPosition } from "./types";

export abstract class Component {
    position: IPosition;
    props?: any;
    element: any;
    debug: string = "";

    constructor(position: IPosition, props?: any) {
        if (position[0] + position[3] > 100)
            throw Error("Element vertically overflows parent");
        if (position[1] + position[2] > 100)
            throw Error("Element horizontally overflows parent");
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

    _renderChildren(components: Component[]): string {
        const html = components.map((component: Component) => {
            return component.render();
        });
        return html.join(" ");
    }

    render(): string {
        const flexKey = Date.now() + Math.random();
        const elementKey = flexKey + 1;
        const html = `
        <div 
            class="${flexKey}"
            style="position: absolute;
                top: ${this.position[0]}%; 
                left: ${this.position[1]}%; 
                width: ${this.position[2]}%; 
                height: ${this.position[3]}%;
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
                        : this._renderChildren(this.element?.nodes)
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
