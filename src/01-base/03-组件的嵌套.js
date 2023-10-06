import { React, Component } from "react";

class Child extends Component {
    render() {
        return <div>Child</div>;
    }
}

class NavBar extends Component {
    render() {
        return (
            <div>
                <Child></Child>
                NavBar
            </div>
        );
    }
}

const Tabber = () => <div>Tabber</div>;

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Tabber></Tabber>
            </div>
        );
    }
}
