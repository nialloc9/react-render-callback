import React, { PureComponent, Children, cloneElement } from "react";

class Greeting extends PureComponent {
    
    state = {
        greeting : "Hello"
    }

    setGreeting = greeting => this.setState({ greeting });

    render() {
        const { render: onRender, children } = this.props;
        
        const { greeting } = this.state;

        const props = {
            greeting,
            onSetGreeting: this.setGreeting
        };
        // if render prop then use render function else use children
        return onRender ? onRender(props) : cloneElement(Children.only(children), props);
    }
}

export default Greeting;