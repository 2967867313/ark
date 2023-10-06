import React, { Component } from "react";
import BScroll from "better-scroll";

export default class App extends Component {
    state = {
        list: [],
    };
    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>click</button>
                <div
                    className="warpper"
                    style={{ height: "200px", backgroundColor: "yellow", overflow: "hidden" }}
                >
                    <ul className="content">
                        {this.state.list.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
    getData() {
        var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.setState(
            {
                list: list,
            },
            () => {
                new BScroll(".warpper");
            }
        );
    }
}
