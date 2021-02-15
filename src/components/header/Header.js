import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import logo from '../../images/botani_logo.png';

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/botani">
                    <img className="navbar__logo" src={logo} />
                </Link>
                <div className="navbar__nav">
                    <Link className="navbar__nav-item" to="/botani/home">Home</Link>
                    <Link className="navbar__nav-item" to="/botani/about">About</Link>
                    <Link className="navbar__nav-item" to="/botani/products">Products</Link>
                    <Link className="navbar__nav-item" to="/botani/contact">Contact</Link>
                </div>
               
                
                
            </nav>
        )
    }
}

export default Header;
/*
 <ul className="navbar__nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>

*/