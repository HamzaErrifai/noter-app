import React from "react";

function Note() {
    return (
        <div className="col note-container">
            <h3>Note Title</h3>
            <p>Note BOdy</p>
            <div className="note-utils d-flex justify-content-between">
                <a href="#"><i className="fas fa-palette"></i></a>
                <a href="#"><i className="fa fa-archive"></i></a>
                <a href="#"><i className="fas fa-ellipsis-v ml-auto"></i></a>
            </div>
        </div>
    );
}

export default Note;
