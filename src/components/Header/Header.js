import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list">List</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;