import React, { Component } from "react";

export default class App extends Component {
    state = {
        text: "收藏",
    };
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <button
                    onClick={() => {
                        this.setState({
                            text: "已收藏",
                        });
                    }}
                >
                    {this.state.text}
                </button>
            </div>
        );
    }
}
