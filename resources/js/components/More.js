import React, { useState } from "react";
import Portal from "./inc/Portal";
import NoteList from "./NoteList";

function More() {
    //#region vars
    const [showPortal, setShowPortal] = useState(false);
    //#endregion

    //#region methods
    /**
     * Closes the portal
     */
    const closePortal = () => {
        setTimeout(() => {
            setShowPortal(false);
        }, 100);
    };
    //#endregion
    
    return (
        <div>
            <a
                href="#"
                className="btn btn-info btn-block"
                onClick={() => {
                    setShowPortal(true);
                }}
            >
                Archive
            </a>
            {showPortal && (
                <Portal
                    show={true}
                    bgColor={"#343a40"}
                    closePortal={closePortal}
                >
                    <h2 className="text-center">Archive</h2>
                    <NoteList isArchive={true} />
                </Portal>
            )}
        </div>
    );
}

export default More;
