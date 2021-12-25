import React from "react";
import './style.css';

const Header = ({count}) => {
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Shoes App</h1>
                </a>
            </div>
            <div className="right">
                <a href="#/cart">Cart ({count})</a> <a href="#/signin">Sign In</a>
            </div>
        </header>
    );
}

export default Header;