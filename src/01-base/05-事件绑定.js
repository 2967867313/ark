import React, { Component } from "react";

export default class App extends Component {
    a = 100;
    render() {
        return (
            <div>
                <input />
                <button
                    onClick={() => {
                        console.log("click1", this.a);
                    }}
                >
                    Add1
                </button>
                <button onClick={this.handleClick2.bind(this)}>Add2</button>
                <button onClick={this.handleClick3}>Add3</button>
                {/* 推荐 */}
                <button onClick={() => this.handleClick4()}>Add4</button>
            </div>
        );
    }
    handleClick2() {
        console.log("click2");
    }
    handleClick3 = () => {
        console.log("click3");
    };
    handleClick4() {
        console.log("click4");
    }
}
