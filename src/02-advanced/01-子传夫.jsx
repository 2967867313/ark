import React, { Component } from "react";

class NavBar extends Component {
    state = {
        inpValut: "",
    };
    render() {
        let { handleClick } = this.props;
        return (
            <div>
                NavBar
                <button onClick={handleClick}>点击</button>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={(e) => {
                        this.setState({ inpValut: e.target.value });
                    }}
                />
            </div>
        );
    }
}
export default class App extends Component {
    state = {
        a: 1,
    };
    myRef = React.createRef();
    render() {
        return (
            <div>
                <NavBar ref={this.myRef} handleClick={this.handleClick} />
                <button onClick={() => this.fClick()}>父点击</button>
            </div>
        );
    }
    handleClick() {
        console.log("log");
    }
    fClick() {
        console.log(this.myRef.current.state.inpValut);
    }
}
