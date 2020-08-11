import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import Chapter from "./pages/Chapter";
import BreadCrumb from "./component/BreadCrumb";
import NestedChapter from "./pages/NestedChapter";
import NavBarMenu from "./component/NavBarMenu"
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import {ProtectedRoute} from "./component/Protected";

function App() {
    return (
        <div className='app'>

            <HashRouter>

                <NavBarMenu/>

                <BreadCrumb/>

                <Route exact path='/' component={Home}/>
                {/*<Route path='/dashboard' component={Dashboard}/>*/}
                <Route path='/chapters' component={Chapters}/>
                <Route path="/chapters/:chapterId" component={Chapter}/>
                <Route path="/chapters/:chapterId/:course" component={NestedChapter}/>
                <Route path='/about' component={About}/>
                <Route path='/login' component={Login}/>
                <Route path='/logout' component={Logout}/>


                <ProtectedRoute path ="/dashboard" component={Dashboard}/>
            </HashRouter>
        </div>
    );
}

export default App;
