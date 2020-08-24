import React from "react";
import Style from "./AdminZone.module.css"
import {NavLink} from "react-router-dom";

export default function AmdminZone(props){
    return (
        <div className={Style.adminzone}>
            <NavLink to={props.href}>{props.caption}</NavLink>
        </div>
    );
}