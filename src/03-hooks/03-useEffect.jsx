import React, { useEffect } from "react";
import axios from "axios";

export default function App() {
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6602280",
            headers: {
                "X-Client-Info":
                    '{"a":"3000","ch":"1002","v":"5.2.1","e":"1695899668439211945623553","bc":"110100"}',
                "X-Host": "mall.film-ticket.cinema.list",
            },
        }).then((res) => console.log(res));
    }, []);

    return <div>App</div>;
}
