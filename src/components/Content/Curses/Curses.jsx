import React, {useLayoutEffect} from "react";
import CursesItem from "./CursesItem/CursesItem";
import Style from "./Curses.module.css"

export  default  function Curses(props) {
return (
    <div>
        <div>
            {props.curses.map(curs => (<CursesItem curs={curs} />))}
        </div>
    </div>
)
}