import React, { Component } from "react";
import "./index.css";

export default class Filed extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "yellow" }}>
                <label>{this.props.label}</label>
                <input type={this.props.type} />
            </div>
        );
    }
}
