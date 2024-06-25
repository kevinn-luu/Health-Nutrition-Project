import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";
// import { ReactComponent as HomeIcon } from "./icons/home.svg";

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
            <button id="personal-button" className="nav-button">
                <Link to="/personal">
                    <i className="fas fa-user"></i>
                </Link>
            </button>
            <button id="home-button" className="nav-button">
                <Link to="/">
                    <i className="fas fa-home"></i>
                </Link>
            </button>
            <button id="nav-button" className="nav-button">
                <span className="button-line"></span>
                <span className="button-line"></span>
                <span className="button-line"></span>
            </button>
        </div>
    );
};

export default Layout;