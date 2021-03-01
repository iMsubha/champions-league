import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h1>Champions League</h1>
            <nav>
                <a href="./">Player List</a>
                <a href="./club">Club</a>
            </nav>
        </div>
    );
};

export default Header;