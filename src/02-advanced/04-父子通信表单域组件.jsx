import React, { Component } from "react";

class Filed extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(e) => this.props.handleChange(e.target.value)} />
            </div>
        );
    }
}

export default class App extends Component {
    state = {
        username: "",
        password: "",
    };
    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Filed
                    label="用户名"
                    type="text"
                    handleChange={(val) => {
                        this.setState({ username: val });
                    }}
                />
                <Filed
                    label="密码"
                    type="password"
                    handleChange={(val) => {
                        this.setState({ password: val });
                    }}
                />
                <button
                    onClick={() => {
                        console.log(this.state.username, this.state.password);
                    }}
                >
                    登录
                </button>
            </div>
        );
    }
}
