import React from 'react';
import './App.css';
import {HashRouter, Link, Route} from "react-router-dom";
import BreadCrumb from "./component/BreadCrumb";
import ListGroup from "react-bootstrap/cjs/ListGroup";
import routes from "./routes";
import Switch from "react-bootstrap/Switch";

function App() {
    return (
        <div className='app'>

            <HashRouter>

                <div style={{display: "flex"}}>
                    <div
                        style={{backgroundColor: "#15b280", borderRight: "1px solid #0979FA", height: "1200px"}}>

                        <ListGroup style={{width: "350px", height: "1000px"}}>

                            {routes?.map((route, index) => (
                                <>
                                    {route.isLink ?
                                        <li><Link key={index} to={route.path}>{route.menu}</Link></li>
                                        : ''}
                                </>
                            ))
                            }

                        </ListGroup>
                    </div>

                    <BreadCrumb/>

                    <div style={{padding: "40px"}}>
                        <Switch>
                            {routes?.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </HashRouter>

        </div>
    );
}

export default App;
