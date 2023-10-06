import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.handleClick(0)}>back</button>
                <span>卖座电影</span>
                <button onClick={() => this.props.handleClick(2)}>go</button>
            </div>
        );
    }
}
