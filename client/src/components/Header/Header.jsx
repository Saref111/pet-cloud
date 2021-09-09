import React from "react";
import './header.scss'
import Logo from '../../assets/img/logo.svg'
import { NavLink } from "react-router-dom";
function Header() {
    return (<header className="header">
        <div className="header__wrapper">
            <a href="/" className="header__logo">
                <img src={Logo} alt="B-Cloud Logo" />
            </a>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__item">
                        <NavLink to="/" className="header__link">Log in</NavLink>
                    </li>
                    <li className="header__item">
                        <NavLink to="/registration" className="header__link">Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>);
}

export default Header;