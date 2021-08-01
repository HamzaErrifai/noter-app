import React, { useState } from "react";
import Portal from "./inc/Portal";

function AddNote() {
    const [showPortal, setShowPortal] = useState(false);
    const closePortal = () => {
        setTimeout(() => {
            setShowPortal(false);
        }, 100);
    };
    return (
        <div
            className="add-container shadow-sm"
            onClick={() => {
                setShowPortal(true);
            }}
        >
            <i className="fas fa-plus"></i>
            {showPortal ? (
                <Portal show={true} bgColor={"gray"} closePortal={closePortal}>
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

export default AddNote;
