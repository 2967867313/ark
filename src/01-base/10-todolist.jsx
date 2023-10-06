import React, { Component } from "react";

export default class App extends Component {
    inpRef = React.createRef();
    state = {
        list: [
            {
                mytext: "111",
                id: "1",
            },
            {
                mytext: "222",
                id: "2",
            },
            {
                mytext: "333",
                id: "3",
            },
        ],
    };
    render() {
        return (
            <div>
                <input type="text" ref={this.inpRef} />
                <button onClick={() => this.handelClick()}>Add</button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={item.id}>
                                {item.mytext}
                                <button onClick={() => this.del({ id: item.id })}>删除</button>
                                <button onClick={() => this.del({ index })}>删除</button>
                            </li>
                        );
                    })}
                </ul>
                {this.state.list.length === 0 ? <div>无</div> : null}
                <div className={this.state.list.length === 0 ? "" : "hidden"}>无</div>
            </div>
        );
    }
    handelClick() {
        let newList = [...this.state.list];
        newList.push({
            id: Math.random() * 100000,
            mytext: this.inpRef.current.value,
        });
        this.setState({ list: newList });
        this.inpRef.current.value = "";
    }
    del(val) {
        let newList = [...this.state.list];
        if (val.id) {
            console.log(val.id);
            const sub = newList.findIndex((item) => {
                return item.id == val.id;
            });

            newList.splice(sub, 1);
            this.setState({ list: newList });
        } else {
            newList.splice(val.index, 1);
            this.setState({ list: newList });
        }
    }
}
