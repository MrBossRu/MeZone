import React from "react";
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Content from "./components/Content/Content";
import Admin from "./components/Admin/Admin";

function App(props) {
    return (
        <BrowserRouter>
            <div className="container" id="container">
                <div className="wrapper">
                    <Switch>
                        <Route path='/admin' render={() => <Admin/>}/>
                        <Route render={() => <Content curses={props.curses}/>}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
