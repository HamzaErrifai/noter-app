import axios from "axios";
import React, { useState } from "react";
import Portal from "./inc/Portal";

function AddNote(props) {
    const { addNote } = props;
    const [showPortal, setShowPortal] = useState(false);
    const [showPalette, setPalette] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [bgColor, setBgColor] = useState("#808080");

    const closePortal = () => {
        let note = {
            title: title,
            content: content,
            archieved: 0,
            pinned: 0,
            color: bgColor,
        };

        //push in db and pull
        axios.post("/api/addnote", note).then((resp) => addNote(resp.data));

        //reset form
        setTitle("");
        setContent("");
        setBgColor("gray");

        //close portal
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
                <Portal
                    show={true}
                    bgColor={"#808080"}
                    closePortal={closePortal}
                >
                    <input
                        type="text"
                        className="inp-area-note"
                        placeholder="Title"
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
                        placeholder="Content"
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
                            // <input
                            //     type="color"
                            //     onChange={(e) => {
                            //         e.preventDefault();
                            //         setBgColor(e.target.value);
                            //         // setPalette(false);
                            //     }}
                            //     value={bgColor}
                            // />
                            <>
                                <input
                                    type="color"
                                    list="presetColors"
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setBgColor(e.target.value);
                                        // setPalette(false);
                                    }}
                                    value={bgColor}
                                />
                                <datalist id="presetColors">
                                    <option>#808080</option>
                                    <option>#153465</option>
                                    <option>#67160e</option>
                                    <option>#135714</option>
                                    <option>#cca529</option>
                                    <option>#b45c18</option>
                                    <option>#341b4d</option>
                                </datalist>
                            </>
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
