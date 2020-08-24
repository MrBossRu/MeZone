import React from "react";
import {NavLink} from "react-router-dom";
import Style from './Users.module.css'

export  default  function Users(){
    return(
        <div>
            <div className={Style.clearfix}>
            <div className={Style.header}>
                <h1 className={Style.title}>Пользователи</h1>
                <NavLink to='/admin/users/create' className={Style.addbtn}>Добавить пользователя</NavLink>
            </div>
        </div>
            <div>
                <div className={Style.iconSearch}><i className={Style.fa}></i></div>
            </div>
            <div>Таблица пользователи</div>

        </div>
    )
}