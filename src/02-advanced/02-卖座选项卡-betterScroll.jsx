import React, { Component } from "react";
import Center from "./component/Center";
import Cnelma from "./component/02-betterScroll-cinema";
import Film from "./component/Film";
import Tabber from "./component/Tabber";
import NavBar from "./component/NavBar";

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
                return <Cnelma />;
            case 2:
                return <Center />;
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    handleClick={(index) => {
                        this.setState({ current: index });
                    }}
                />
                {this.which()}
                <Tabber
                    handleClick={(index) => {
                        this.setState({ current: index });
                    }}
                    current={this.state.current}
                    list={this.state.list}
                />
            </div>
        );
    }
}
