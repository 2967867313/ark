import React, { Component } from "react";
export default class App extends Component {
    render() {
        const styles = {
            backgroundColor: "yellow",
        };
        return (
            <div>
                <div style={styles}>{10 + 20}</div>
                <div style={{ backgroundColor: "red" }}>{10 + 20}</div>
            </div>
        );
    }
}
