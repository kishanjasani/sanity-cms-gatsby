import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Hot Now</Link>
                </li>
                <li>
                    <Link to="/pizzas">Pizza Menu</Link>
                </li>
                <li>
                    <Link to="/">Logo</Link>
                </li>
                <li>
                    <Link to="/">Slice Master</Link>
                </li>
                <li>
                    <Link to="/">Order Ahead!</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;