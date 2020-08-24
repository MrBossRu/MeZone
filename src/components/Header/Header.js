import React, {useLayoutEffect} from "react";
import AdminZone from "./AdminZone/AdminZone"
import MainMenu from "./MainMenu/MainMenu"

export default function Header() {
    return (
        <div>
            <AdminZone caption='Администрирование' href='/admin'/>
            <MainMenu
                sideMenu={[
                    {name: 'О Нас', href: '/about'},
                    {name: 'Курсы', href: '/curses'},
                    {name: 'Регистрация', href: '/'},
                    {name: 'Выход', href: '/'}
                ]}
                mainMenu={[
                    {name: 'О Нас', href: '/about'},
                    {name: 'Курсы', href: '/curses'},
                ]}/>
        </div>
    );
}