import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import icon from '../../../img/icon/jaj.png';

const Header = () => {
    const { user, logOut } = useAuth();

    const activeStyle = {
        color: "red"
    }
    const style = {
        textDecoration: "none",
        fontWeight: "bold",
        padding: "10px"
    }
    return (
        <div>
            <>
                <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <div className='d-flex align-items-center'>
                                <img src={icon} alt="" />
                                <span className='text-warning px-2'><b>JAJ Shop</b></span>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-start">
                            <NavLink activeStyle={activeStyle} style={style} to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/services">Reconditioned Car</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/about">About Us</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/contact">Contact</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/addService">Add Service</NavLink>
                            {user.displayName ?
                                <Button onClick={logOut} variant="light">Logout</Button>
                                : <NavLink activeStyle={activeStyle} style={style} to="/login">Login</NavLink>
                            }

                            <Navbar.Text>
                                <a href="#login">{user?.displayName ? user?.displayName : ''}</a>
                            </Navbar.Text>

                            {user.displayName ?
                                <Navbar.Brand className='mx-3'>
                                    <img
                                        className="d-inline-block align-top"
                                        src={user?.photoURL ? user?.photoURL : ''}
                                        alt=""
                                        width="30"
                                        height="30"
                                    />
                                </Navbar.Brand> : ''}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;