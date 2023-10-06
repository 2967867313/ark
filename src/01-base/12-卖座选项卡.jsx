import React, { Component } from "react";
import Center from "../component/Center";
import Cnelma from "../component/Cnelma.js";
import Film from "../component/Film";

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "电影",
            },
            {
                id: 2,
                text: "影院",
            },
            {
                id: 3,
                text: "我的",
            },
        ],
        current: 0,
    };
    which() {
        switch (this.state.current) {
            case 0:
                return <Film />;
            case 1:
                return <Center />;
            case 2:
                return <Cnelma />;
        }
    }
    render() {
        return (
            <div>
                {this.which()}
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li
                                key={item.id}
                                className={this.state.current === index ? "active" : ""}
                                onClick={() => this.handleClick(index)}
                            >
                                {item.text}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    handleClick(index) {
        this.setState({ current: index });
    }
}
