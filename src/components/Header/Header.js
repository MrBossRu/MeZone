import React, { useLayoutEffect } from "react";
import AdminZone from "./AdminZone/AdminZone"
import MainMenu from "./MainMenu/MainMenu"

export default function Header(){
    return (
        <div>
            <AdminZone/>
            <MainMenu/>
        </div>
    );
}