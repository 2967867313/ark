import axios from "axios";
import React, { Component } from "react";

export default class Cnelma extends Component {
    constructor() {
        super();
        this.state = {
            cinemaList: [],
            baclCinemaList: [],
        };
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6602280",
            headers: {
                "X-Client-Info":
                    '{"a":"3000","ch":"1002","v":"5.2.1","e":"1695899668439211945623553","bc":"110100"}',
                "X-Host": "mall.film-ticket.cinema.list",
            },
        }).then((res) => {
            this.setState({
                cinemaList: res.data.data.cinemas,
                baclCinemaList: res.data.data.cinemas,
            });
        });
    }
    render() {
        return (
            <div>
                <input type="text" onInput={(e) => this.handleInp(e)} />
                {this.state.baclCinemaList.map((item) => {
                    return (
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                    );
                })}
            </div>
        );
    }
    handleInp(e) {
        let newList = this.state.cinemaList.filter((item) =>
            item.name.includes(e.target.value)
        );
        this.setState({ baclCinemaList: newList });
    }
}
