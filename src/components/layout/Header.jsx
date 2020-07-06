import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <header style={headerStyle}>
            <h1>ToDo List</h1>
            <Link to='/' style={linkStyle}>Home</Link> | <Link style={linkStyle} className="grow" to='/about'>about</Link>
        </header>
     );
}

const linkStyle={
    color: '#fff',
    textDecoration: 'none',
}

const headerStyle = {
    textAlign:"center",
    background:"black",
    color: "white",
    padding: "10px",
    boxShadow: "2px 2px #f4f4"
}
export default Header;