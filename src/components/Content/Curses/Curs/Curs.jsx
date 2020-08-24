import React, {useLayoutEffect} from "react";
import Style from "./Curs.module.css"
import {NavLink} from "react-router-dom";
import 'draft-js/dist/Draft.css';

export default function Curs() {
    return (
        <div>
            <div>
                <NavLink to='/prev' className={Style.NavBtnPrev}>Prev</NavLink>
                <NavLink to='/next' className={Style.NavBtnNext}>Next</NavLink>
            </div>
        </div>
    )
}



