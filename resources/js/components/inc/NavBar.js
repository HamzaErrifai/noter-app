import React, { useState } from "react";
import More from "../More";
import Profile from "../Profile";
import Portal from "./Portal";
/**
 * Renders NavBar
 * @returns {JSX}
 */
function NavBar() {
    const [showPortal, setShowPortal] = useState(false);
    const [what, setWhat] = useState();
    const [searchVal, setSearchVal] = useState("");

    const whatToshow = (val) => {
        setWhat(val);
        setShowPortal(true);
    };
    const getWhat = () => {
        switch (what) {
            case "profile":
                return <Profile />;
                break;
            case "more":
                return <More />;
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
    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchVal(e.target.value);
        //filter notes
        const notes = document.querySelectorAll(".note-container");
        for (let i = 0; i < notes.length; i++) {
            if (
                notes[i].textContent
                    .toLowerCase()
                    .includes(String(e.target.value).toLowerCase())
            ) {
                notes[i].style.display = "block";
            } else notes[i].style.display = "none";
        }
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
                    src={`/storage/${window.Laravel.user.photo}`}
                    width="30"
                    height="30"
                    className="rounded-circle shadow bg-white"
                />
            </a>

            <input
                className="form-control search-bar shadow-sm ml-auto mr-auto z-index-10"
                type="search"
                value={searchVal}
                onChange={handleSearchChange}
                placeholder="Search"
                aria-label="Search"
            />

            <a
                className="ml-auto text-dark bg-white rounded-circle shadow-sm burger-menu z-index-10"
                href="#"
                onClick={() => whatToshow("more")}
            >
                <i className="fas fa-bars"></i>
            </a>
            {showPortal && (
                <Portal
                    show={true}
                    bgColor={"#343a40"}
                    closePortal={closePortal}
                >
                    {getWhat()}
                </Portal>
            )}
        </nav>
    );
}

export default NavBar;
