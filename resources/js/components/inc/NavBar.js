import React from "react";

function NavBar(props) {
    return (
        <nav className="navbar navbar-light">
            <div className="bg-blur"></div>
            <a className="navbar-brand " href="#">
                <img
                    src="/imgs/photoHolder.svg"
                    width="30"
                    height="30"
                    className="rounded-circle shadow"
                />
            </a>

            <input
                className="form-control search-bar shadow-sm ml-auto mr-auto" 
                type="search"
                placeholder="Search"
                aria-label="Search"
            />

            <a
                className="ml-auto text-dark bg-white rounded-circle shadow-sm burger-menu"
                href="#"
            >
                <i className="fas fa-bars"></i>
            </a>

            
        </nav>
    );
}

export default NavBar;
