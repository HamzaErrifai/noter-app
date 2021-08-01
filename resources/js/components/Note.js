import React, { useState } from "react";
import Portal from "./inc/Portal";

function Note() {
    const [showPortal, setShowPortal] = useState(false);
    const [bgColor, setbgColor] = useState("gray");
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
            {showPortal ? (
                <Portal show={true} bgColor={bgColor} closePortal={closePortal}>
                    <input
                        type="text"
                        className="inp-area-note"
                        value="Note Title"
                    />

                    <textarea
                        className="txt-area-note"
                        value="Note BOdy"
                    ></textarea>
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
                </Portal>
            ) : null}
        </div>
    );
}

export default Note;
