import React, { Component } from "react";

export default class App extends Component {
    constructor() {
        super();
        console.log("constructor: ");
    }
    state = {
        a: 1,
    };
    static getDerivedStateFromProps(nextProps, preState) {
        console.log("getDerivedStateFromProps: ");
        // console.log("nextProps: ", nextProps);
        // console.log("preState: ", preState);
        return {};
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate: ");
        return true;
    }
    getSnapshotBeforeUpdate(nextProps, preState) {
        console.log("getSnapshotBeforeUpdate: ");
        // console.log("nextProps: ", nextProps);
        // console.log("preState: ", preState);
        return 123;
    }
    componentDidUpdate(nextProps, preState, value) {
        console.log("componentDidUpdate: ");
        // console.log("nextProps: ", nextProps);
        // console.log("preState: ", preState);
        // console.log("preState: ", this.state);
        // console.log("value: ", value);
    }
    componentDidMount() {
        console.log("componentDidMount: ");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount: ");
    }
    render() {
        console.log("render");
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({ a: 2 });
                    }}
                >
                    点击
                </button>
                <input type="text" />
            </div>
        );
    }
}
