import React, {useLayoutEffect} from "react";
import {NavLink} from "react-router-dom";
import  Style from "./MainMenu.module.css";

export default function MainMenu(props) {
    function btnClick() {
        document.getElementById("menubtn").classList.toggle(Style.change);
        if (document.getElementById("mySidenav").style.width == "250px") {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("container").style.marginLeft = "0";
            document.getElementById("container").style.margin = "0 auto";
        } else {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("container").style.marginLeft = "250px";
        }
    }

    return (
        <div>
            <div id="menubtn" className={Style.menubtn} onClick={btnClick}>
                <div className={Style.el1}></div>
                <div className={Style.el2}></div>
                <div className={Style.el3}></div>
            </div>
            <div id="mySidenav" className={Style.sidenav}>
                <div className={Style.closesidenavbtn}>
                    <a href="javascript:void(0)" onClick={btnClick}>
                        ×
                    </a>
                </div>
                {props.sideMenu.map(el => (<NavLink to={el.href}>{el.name}</NavLink>))}
            </div>
            <div className={Style.logo}>
                <a href="#">MeZone</a>
            </div>
            <div className={Style.menu}>
                <ul>
                    {props.mainMenu.map(el => (<li><NavLink to={el.href}>{el.name}</NavLink></li>))}
                </ul>
            </div>
            <div className={Style.regmenu}>
                <ul>
                    <li>
                        <a href="#">Регистрация</a>
                    </li>
                    <li>
                        <a href="#">Войти</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
