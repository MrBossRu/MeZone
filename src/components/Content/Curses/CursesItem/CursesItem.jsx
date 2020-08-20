import React from "react";
import  Style from "./CursesItem.module.css"
import {NavLink} from "react-router-dom";

export  default  function CursesItem(props){
    return(
        <div className={Style.card}>
            <div className={Style.cardwrapper}>
                <h2>{props.curs.name}</h2>
                <article>
                    {props.curs.info}
                </article>
            </div>
            <div className={Style.cardfooter}>
                <hr/>
                <div className={Style.cursdelay}>{'Длительность: '+ props.curs.duration +' часов'}</div>
                <NavLink to="/curs">
                    <button className={Style.cursbtn} type="submit">Начать</button>
            </NavLink>
            </div>
        </div>

    )
}