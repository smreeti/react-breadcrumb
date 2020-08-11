import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {faBook, faDesktop, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NavBarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"> <Link to="/">
                                <FontAwesomeIcon icon={faHome}/>
                                Home </Link></Nav.Link>

                            <Nav.Link href="#dashboard">
                                <FontAwesomeIcon icon={faDesktop}/>
                                Dashboard</Nav.Link>

                            <Nav.Link href="#chapter"><Link to="/chapters">
                                <FontAwesomeIcon icon={faBook}/>
                                Chapter</Link></Nav.Link>

                            <br/>
                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#logout"><Link to="/logout">
                                        <FontAwesomeIcon icon={faUser}/>
                                        Logout</Link></Nav.Link>
                                    :
                                    <Nav.Link href="#login"><Link to="/login">
                                        <FontAwesomeIcon icon={faUser}/>
                                        Login</Link></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBarMenu