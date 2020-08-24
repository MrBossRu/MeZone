import React from "react";
import Style from "./AdminHeader.css"
import AdminZone from "../../Header/AdminZone/AdminZone";
import MainMenu from "../../Header/MainMenu/MainMenu";

export default function AdminHeader() {
    let SideMenuData = [
        {name: 'Курсы', href: '/admin/curses'},
        {name: 'Пользователи', href: '/admin/users'},
        {name: 'Статистика', href: '/admin/stat'},
        {name: 'Выход', href: '/'}
    ]
    let MainMenuData = [
        {name: 'Курсы', href: '/admin/curses'},
        {name: 'Пользователи', href: '/admin/users'},
        {name: 'Статистика', href: '/admin/stat'}
    ]
    return (
        <div>
            <AdminZone caption='Главная' href='/'/>
            <MainMenu sideMenu = {SideMenuData} mainMenu={MainMenuData}/>
        </div>
    )
}