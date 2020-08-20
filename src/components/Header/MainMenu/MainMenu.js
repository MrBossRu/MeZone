import React, {useLayoutEffect} from "react";
import {NavLink} from "react-router-dom";
import  Style from "./MainMenu.module.css"

export default function MainMenu() {
    function btnClick() {
        document.getElementById("menubtn").classList.toggle("change");
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
                <NavLink to="/about">О Нас</NavLink>
                <NavLink to="/curses">Курсы</NavLink>
                <a href="#">Регистрация</a>
                <a href="#">Вход</a>
            </div>
            <div className={Style.logo}>
                <a href="#">MeZone</a>
            </div>
            <div className={Style.menu}>
                <ul>
                    <li>
                        <NavLink to="/About">О Нас</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Curses">Курсы</NavLink>
                    </li>
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
