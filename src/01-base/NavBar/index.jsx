import React, { Component } from "react";
import propTypes from "prop-types";

export default class NavBar extends Component {
    static propTypes = {
        title: propTypes.string,
    };
    static defaultProps = {
        title: "aaa",
    };
    render() {
        return <div>NavBar{this.props.title}</div>;
    }
}
