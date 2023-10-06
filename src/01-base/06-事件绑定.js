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
                <button onClick={(event) => this.handleClick4(event)}>Add4</button>
            </div>
        );
    }
    handleClick2(evt) {
        console.log("evt: ", evt);
        // console.log("click2");
    }
    handleClick3 = (evt) => {
        console.log("evt: ", evt);
        console.log("click3");
    };
    handleClick4(event) {
        console.log("evt: ", event);
        console.log("click4");
    }
}
