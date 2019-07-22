import React from 'react';
import {NavLink} from 'react-router-dom'
const MainNavigation = props => (
    <div>
        <div className="main-navigation__logo">
            <h1>Navigation</h1>
        </div>
        <nav className="main-navigation__logo">
            <ul>
                <li>
                    <NavLink to="/auth">Auth</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    </div>
)
export default MainNavigation;