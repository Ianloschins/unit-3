import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div>
                <Link to="/">Home</Link>
                <Link to="/">Blue</Link>
                <Link to="/">Red</Link>
            </div>
        </footer>
    )
}

export default Footer;