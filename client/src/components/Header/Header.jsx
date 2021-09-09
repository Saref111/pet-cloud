import React from "react";
import './header.scss'
import Logo from '../../assets/img/logo.svg'
function Header() {
    return (<header className="header">
        <div className="header__wrapper">
            <a href="/" className="header__logo">
                <img src={Logo} alt="B-Cloud Logo" />
            </a>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__item">
                        <button className="header__link">Log in</button>
                    </li>
                    <li className="header__item">
                        <button className="header__link">Sign Up</button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>);
}

export default Header;