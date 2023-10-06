import React, { Component } from "react";

export default class App extends Component {
    myRef = React.createRef();
    render() {
        return (
            <div>
                <input ref={this.myRef} />
                <button onClick={() => this.handleClick()}>Add4</button>
            </div>
        );
    }

    handleClick() {
        console.log(this.myRef.current.value);
    }
}
