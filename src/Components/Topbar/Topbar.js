import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Photo/logo.png'
const Topbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Link to="/home">
                    <Navbar.Brand href="/home">
                    <img
                        alt=""
                        src={logo}
                        width="80"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    Premier League
                    </Navbar.Brand>
                </Link>
            </Navbar>
      </>
    );
};

export default Topbar;