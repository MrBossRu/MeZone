import React from "react";
import Style from "./Admin.module.css"
import AdminHeader from "./AdminHeader/AdminHeader";
import {Route} from "react-router-dom";
import Footer from "../Footer/Footer";
import Users from "./Content/Users/Users";
import CursManager from "./Content/CursManager/CursManager";
import Stat from "./Content/Stat/Stat";

export  default  function Admin(){
    return(
        <div>
            <div id='admincontainer' className="wrapper">
                <div className="clearfix">
                    <AdminHeader />
                </div>
                <hr/>
                <div className="content clearfix">
                    <Route path='/admin/users' component={Users}/>
                    <Route path='/admin/curses' component={CursManager}/>
                    <Route path='/admin/stat' component={Stat}/>
                </div>
            </div>
        </div>
    )
}