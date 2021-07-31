import React from "react";
import bootstrap from 'bootstrap'

function NavBar(props) {
    const { auth } = props;
    
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img
                    src="https://via.placeholder.com/150"
                    width="30"
                    height="30"
                    className="rounded-circle"
                />
            </a>
        </nav>
    );
}

export default NavBar;
