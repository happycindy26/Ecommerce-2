import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import logo from '../../images/botani_logo.png';

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                 <div className="navbar__nav">
                    <Link to="/botani">
                        <img className="navbar__nav-logo" src={logo} />
                    </Link>
               
                    <Link className="navbar__nav-item" to="/botani/home">Home</Link>
                    <Link className="navbar__nav-item" to="/botani/about">About</Link>
                    <Link className="navbar__nav-item" to="/botani/products">Products</Link>
                    <Link className="navbar__nav-item" to="/botani/contact">Contact</Link>
                </div>
                <div>
                    <a href="#"><i class="fas fa-search"></i></a>
                    
                    <Link className="navbar__nav-signin" to="/botani/signin">Sign in</Link>
                </div>
                
                
            </nav>
        )
    }
}

export default Header;

