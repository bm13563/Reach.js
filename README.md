# Reach.js

## Not another front-end framework!

Yep. Sorry.

## So what is it?

It's a tool for creating single-file components without the use of render functions or transpilers. Transpilers are bulky and render functions are messy. Reach doesn't use either, and in doing so becomes more bulky AND more messy

Components are built from html + css strings, which can be injected with event handlers via string templating. Reach uses class-based components to handle state. A basic component might look like this:

```ts
import { Component } from "../component";

export class Statement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statement: "Reach.js is really great",
        }
    }

    c({props, register, setState, getState, html}) {
        const updateStatement = () => {
            setState("statement", "Reach.js is fundamentally flawed with few redeeming qualities");
        }

        html(`
            <div>${props.warmGreeting}</div>
            <div ${register("onclick", updateStatement)}>${getState("statement")}</div>
        `);
    }
}
```

## So why is it better than anything else out there?

It 100% isn't. It's actually a lot worse than most other front-end frameworks

## Well that sounds rubbish

Yep. Sorry if you made it this far
