import React, {useLayoutEffect} from "react";
import Header from "../Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./About/About";
import Curses from "./Curses/Curses";
import Footer from "../Footer/Footer";

export default function Content(props) {
    return (
        <div>
            <div className="clearfix">
                <Header/>
            </div>
            <hr/>
            <div className="content clearfix">
                <Route path='/about' component={About}/>
                <Route path='/curses' render={() => <Curses curses={props.curses} /> }/>
            </div>
        </div>
    )
}