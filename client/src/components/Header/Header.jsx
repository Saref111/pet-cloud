import React from "react";
import './header.scss'
import Logo from '../../assets/img/logo.svg'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";
function Header() {
    const isAuth = useSelector((state) => state.user.isAuth)
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logout())
    }
    return (<header className="header">
        <div className="header__wrapper">
            <a href="/" className="header__logo">
                <img src={Logo} alt="B-Cloud Logo" />
            </a>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    {!isAuth &&
                        <li className="header__item">
                            <NavLink to="/login" className="header__link">Log in</NavLink>
                        </li>
                    }
                    {!isAuth &&
                        <li className="header__item">
                            <NavLink to="/registration" className="header__link">Sign Up</NavLink>
                        </li>
                    }
                    {isAuth &&
                        <li className="header__item">
                            <button onClick={logOut} className="header__link">Log out</button>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    </header>);
}

export default Header;