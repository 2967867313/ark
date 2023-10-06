import React, { useState, useEffect } from "react";

function Child() {
    return <div>Child</div>;
}

export default function App() {
    const [state, setState] = useState("ark");
    useEffect(() => {
        console.log("useEffect1");
        return () => {
            console.log("useEffect2");
        };
    }, [state]);
    return (
        <div>
            {state ? <Child /> : null}
            <button onClick={() => setState(!state)}>点击</button>
        </div>
    );
}
