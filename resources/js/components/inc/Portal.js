import React, { useState } from "react";
import ReactDOM from "react-dom";

const capitalize = (str) => {
    if (str !== undefined && str.length > 0)
        return str.charAt(0).toUpperCase() + str.slice(1);
    return str;
};
/**
 * Renders what is given to children
 * @param {*} props
 * @returns {JSX}
 */
function Portal(props) {
    const meta = document.getElementById("theme-color");
    meta.setAttribute("content", props.bgColor);

    return ReactDOM.createPortal(
        <div
            id="portal"
            className="portal-show animate__animated animate__fadeInUpBig animate__fast"
            style={{ backgroundColor: props.bgColor }}
        >
            <h2 className="top-portal-panel shadow-sm">
                <a
                    href="#"
                    className="text-white ml-3"
                    onClick={() => {
                        const portal = document.getElementById("portal");
                        portal.classList.replace(
                            "animate__fadeInUpBig",
                            "animate__fadeOutDownBig"
                        );
                        setTimeout(() => {
                            portal.classList.replace(
                                "animate__fadeOutDownBig",
                                "animate__fadeInUpBig"
                            );
                            props.closePortal();
                        }, 100);
                    }}
                >
                    <i className="fas fa-arrow-left"></i>
                </a>
                <p className="text-white ml-auto mr-auto mt-3">
                    {capitalize(props.title)}
                </p>
            </h2>
            <div className="container mt-4 portal-content">
                {props.children}
            </div>
        </div>,
        document.getElementById("portal-root")
    );
}

export default Portal;
