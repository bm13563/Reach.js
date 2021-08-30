# Reach.js

## Not another front-end framework!

Yep. Sorry.

## So what is it?

It's a tool for creating single-file components without the use of render functions or transpilers. Transpilers are bulky and render functions are messy. Reach eliminates the need for both, enabling it to become simultaneously bulky and messy

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

    c({props, register, setState, getState}) {
        const updateStatement = () => {
            setState("statement", "Reach.js is fundamentally flawed with few redeeming qualities");
        }

        this.html(`
            <div>${props.warmGreeting}</div>
            <div ${register("onclick", updateStatement)}>${getState("statement")}</div>
        `);
    }
}
```

## Ew, classes

Yeah yeah. Imo class-based components aren't really that bad. Sure there's a bit more boilerplate and sure ```this``` can be confusing, but it is what it is

Shameless plug - you might have noticed the absense of ```this``` in the above snippet, which is apparently a good thing. Thanks to some janky binding, you can choose to abstain from the use of ```this```, especially if it makes you feel like you can run faster or sing like Chaka Khan

## So why is it better than anything else out there?

It isn't. It's actually a lot worse than most other front-end frameworks, because it intentionally gives free use of antipatterns, like weird access to state at global and page levels. In addition to that, it's written by me, and my brain is quite small

## Well that sounds rubbish

Depends on your point of view. Some antipatterns are actually pretty convenient, although I won't turn up at your house if you choose not to use them. Reach is designed to be unopinionated, so how you choose to develop your application is up to you, even if Reach does subtly encourage you to embrace bad practice occasionally by dangling it in front of you
