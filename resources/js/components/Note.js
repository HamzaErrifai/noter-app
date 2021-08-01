import React, { useState } from "react";
import Portal from "./inc/Portal";

function Note() {
    const [showPortal, setShowPortal] = useState(false);
    let bgColor = "darkcyan";
    const closePortal = () => {
        setTimeout(() => {
            setShowPortal(false);
        }, 100);
    };
    return (
        <div
            className="col note-container"
            style={{ backgroundColor: bgColor }}
            onClick={() => {
                setShowPortal(true);
            }}
        >
            <h3>Note Title</h3>
            <p>Note BOdy</p>
            <div className="note-utils d-flex justify-content-between">
                <a href="#">
                    <i className="fas fa-palette"></i>
                </a>
                <a href="#">
                    <i className="fa fa-archive"></i>
                </a>
                <a href="#">
                    <i className="fas fa-ellipsis-v ml-auto"></i>
                </a>
            </div>
            {showPortal ? (
                <Portal show={true} bgColor={bgColor} closePortal={closePortal}>
                    <input type="text" value="Note Title" />

                    <textarea value="Note BOdy"></textarea>
                    <div className="note-portal-utils d-flex justify-content-between">
                        <a href="#">
                            <i className="fas fa-palette"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-archive"></i>
                        </a>
                        <a href="#">
                            <i className="fas fa-ellipsis-v ml-auto"></i>
                        </a>
                    </div>
                </Portal>
            ) : null}
        </div>
    );
}

export default Note;
