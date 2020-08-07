import React from 'react';
import './App.css';
import {HashRouter, Link, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import Chapter from "./pages/Chapter";
import BreadCrumb from "./component/BreadCrumb";
import NestedChapter from "./pages/NestedChapter";

function App() {
    return (
        <div className='app'>

            <HashRouter>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/chapters">React Chapters</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

                <BreadCrumb/>

                <Route exact path='/' component={Home}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/chapters' component={Chapters}/>
                <Route path="/chapters/:chapterId" component={Chapter}/>
                <Route path="/chapters/:chapterId/:course" component={NestedChapter}/>
                <Route path='/about' component={About}/>
            </HashRouter>
        </div>
    );
}

export default App;
