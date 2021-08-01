import axios from "axios";
import React, { useState } from "react";
import Portal from "./inc/Portal";

function AddNote(props) {
    const { addNote } = props;
    const [showPortal, setShowPortal] = useState(false);
    const [showPalette, setPalette] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [bgColor, setbgColor] = useState("gray");

    const closePortal = () => {
        let note = {
            title: title,
            content: content,
            archieved: 0,
            pinned: 0,
            color: bgColor,
        };
        //push in db and pull
        // axios.post("/api/addnote", note).then((resp) => addNote(resp.data));
        //reset form
        setTitle("");
        setContent("");
        setbgColor("gray");
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
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        value={title}
                    />

                    <textarea
                        className="txt-area-note"
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                    ></textarea>
                    <div className="note-utils d-flex justify-content-between">
                        <a
                            href="#"
                            onClick={() => {
                                setPalette(!showPalette);
                            }}
                        >
                            <i className="fas fa-palette"></i>
                        </a>
                        {showPalette && (
                            <input
                                type="color"
                                onChange={(e) => {
                                    e.preventDefault();
                                    setbgColor(e.target.value);
                                    // setPalette(false);
                                }}
                                value={bgColor}
                            />
                        )}

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
