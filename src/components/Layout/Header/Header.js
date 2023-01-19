import React from 'react';
import {Link} from 'react-router-dom';


function Header() {

    return (
        <header>
            <h2>Header</h2>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/api">API</Link>
        </header>
    )
}

export default Header;