import React, {useLayoutEffect} from "react";
import CursesItem from "./CursesItem/CursesItem";
import Style from "./Curses.module.css"

export  default  function Curses() {
    let cursesData = [
        {name: 'Сталеплавильное производство', info: 'Информация 1', duration: '120'},
        {name: 'Прокатное производство', info: 'Информация 2', duration: '10'},
        {name: 'Трубосварочное производство', info: 'Информация 3', duration: '20'}
    ]
return (
    <div>
        <div>
            {cursesData.map(curs => (<CursesItem curs={curs} />))}
        </div>
    </div>
)
}