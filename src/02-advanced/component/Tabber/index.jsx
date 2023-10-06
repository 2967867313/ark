import React, { Component } from "react";

export default class Tabber extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map((item, index) => {
                    return (
                        <li
                            key={item.id}
                            className={this.props.current === index ? "active" : ""}
                            onClick={() => this.props.handleClick(index)}
                        >
                            {item.text}
                        </li>
                    );
                })}
            </ul>
        );
    }
}
