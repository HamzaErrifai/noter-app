import React, { useState } from "react";
import ReactDOM from "react-dom";

function Portal(props) {
    const [show, setShow] = useState(props.show);

    return ReactDOM.createPortal(
        <div className="portal-show" style={{ backgroundColor: props.bgColor }}>
            <h2 className="top-portal-panel shadow-sm">
                <a
                    href="#"
                    className="text-white ml-3"
                    onClick={() => {
                        props.closePortal();
                    }}
                >
                    <i className="fas fa-arrow-left"></i>
                </a>
            </h2>
            <div className="container mt-4 portal-content">

            {props.children}
            </div>
        </div>,
        document.getElementById("portal-root")
    );
}

export default Portal;
