import React, { useState } from "react";
import Portal from "./Portal";

function NavBar(props) {
    const [showPortal, setShowPortal] = useState(false);
    const [what, setWhat] = useState("nothing");
    const whatToshow = (val) => {
        console.log(val);
        setWhat(val);
        setShowPortal(true);
    };
    const getWhat = () => {
        switch (what) {
            case "profile":
                return <h1>Profile</h1>;
                break;
            case "nothing":
                return null;
                break;
            default:
                return null;
                break;
        }
    };
    const closePortal = () => {
        setTimeout(() => {
            setShowPortal(false);
        }, 100);
    };
    return (
        <nav className="navbar navbar-light">
            <div className="bg-blur"></div>
            <a
                className="navbar-brand z-index-10"
                href="#"
                onClick={() => whatToshow("profile")}
            >
                <img
                    src="/imgs/photoHolder.svg"
                    width="30"
                    height="30"
                    className="rounded-circle shadow"
                />
            </a>

            <input
                className="form-control search-bar shadow-sm ml-auto mr-auto z-index-10"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />

            <a
                className="ml-auto text-dark bg-white rounded-circle shadow-sm burger-menu z-index-10"
                href="#"
            >
                <i className="fas fa-bars"></i>
            </a>
            {showPortal && (
                <Portal show={true} bgColor={"#343a40"} closePortal={closePortal}>
                    {getWhat()}
                </Portal>
            )}
        </nav>
    );
}

export default NavBar;
