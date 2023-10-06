import React, { Component } from "react";

class Filed extends Component {
    state = {
        value: "",
    };
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(e) => this.setState({ value: e.target.value })} />
            </div>
        );
    }
}

export default class App extends Component {
    username = React.createRef();
    password = React.createRef();
    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Filed label="用户名" type="text" ref={this.username} />
                <Filed label="密码" type="password" ref={this.password} />
                <button
                    onClick={() => {
                        console.log(this.username.current.state.value, this.password.current.state.value);
                    }}
                >
                    登录
                </button>
            </div>
        );
    }
}
