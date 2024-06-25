import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css"

function Layout ({ children }) {
    return (
        <div>
            <main>
                {children}
            </main>
            <footer>
                <Button />
            </footer>
        </div>
    );
};

function Button () {

    return (
        <div id="nav-button-container">
            <button id="personal-button" className="nav-button"><Link to="/personal">P</Link></button>
            <button id="home-button" className="nav-button"><Link to="/">H</Link></button>
            <button id="nav-button" className="nav-button">
                <span className="button-line"></span>
                <span className="button-line"></span>
                <span className="button-line"></span>
            </button>
        </div>
    );
};

export default Layout;