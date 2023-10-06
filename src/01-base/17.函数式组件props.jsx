import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function App() {
    return (
        <div>
            <NavBar title="导航" />
            <SideBar bg="red" />
        </div>
    );
}
