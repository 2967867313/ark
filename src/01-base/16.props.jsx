import React, { Component } from "react";
import NavBar from "./NavBar";

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar title="首页" />
                <NavBar title="列表" />
                <NavBar title="购物车" />
                <NavBar />
            </div>
        );
    }
}
