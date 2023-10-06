// react18改了
import React, { Component } from "react";

export default class App extends Component {
    state = {
        count: 0,
    };
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={() => this.handleClick1()}>Add1</button>
                <button onClick={() => this.handleClick2()}>Add2</button>
            </div>
        );
    }
    handleClick1() {
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
    }
    handleClick2() {
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
            this.setState({ count: this.state.count + 1 });
            this.setState({ count: this.state.count + 1 });
        }, 0);
    }
}
