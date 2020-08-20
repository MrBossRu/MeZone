import React from "react";
import Footer from "./components/Footer/Footer"
import About from "./components/Content/About/About";
import Header from "./components/Header/Header"
import Curses from "./components/Content/Curses/Curses";
import {BrowserRouter, Route} from "react-router-dom";
import MyEditor from "./components/Content/Curses/Curs/Curs";

function App() {
    return (
        <BrowserRouter>
            <div className="container" id="container">
                <div class="wrapper">
                    <div className="clearfix">
                        <Header/>
                    </div>
                    <hr/>
                    <div className="content clearfix">
                        <Route path='/about' component={About}/>
                        <Route path='/curses' component={Curses}/>
                        <Route path='/curs' component={MyEditor}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
