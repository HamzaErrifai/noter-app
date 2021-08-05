import axios from "axios";
import React, { useState } from "react";
import Portal from "./inc/Portal";

/**
 *  returns 1 if true or 0 if false
 * @param {boolean} boolVal
 * @returns {Integer}
 */
const convertBoolToNumber = (boolVal) => {
    return boolVal ? 1 : 0;
};

/**
 * renders AddNote Element
 *
 * @param {*} props
 * @returns {JSX}
 */
function AddNote(props) {
    //#region vars
    const { addNote } = props;
    const [showPortal, setShowPortal] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [bgColor, setBgColor] = useState("#808080");
    const [isPinned, setIsPinned] = useState(false);
    const [isArchieved, setIsArchieved] = useState(false);
    //#endregion

    //#region methods
    /**
     * Closes the portal
     */
    const closePortal = () => {
        if (title != "" || content != "") {
            let note = {
                title: title,
                content: content,
                archieved: convertBoolToNumber(isArchieved),
                pinned: convertBoolToNumber(isPinned),
                color: bgColor,
            };

            //push and pull from DB
            axios.post("/api/addnote", note).then((resp) => addNote(resp.data));

            //reset form
            setTitle("");
            setContent("");
            setBgColor("#808080");
        }
        //close portal
        setTimeout(() => {
            setShowPortal(false);
        }, 100);
    };
    //#endregion

    return (
        <div
            className="add-container shadow-sm"
            onClick={() => {
                setShowPortal(true);
            }}
        >
            <div className="create-note-div">Create Note...</div>

            <span className="plus-parent">
                <i className="fas fa-plus"></i>
            </span>
            {showPortal ? (
                <Portal
                    show={true}
                    bgColor={"#808080"}
                    closePortal={closePortal}
                    title={"Create Note"}
                >
                    <input
                        type="text"
                        className="inp-area-note"
                        placeholder="Title"
                        maxLength="20"
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
                        <button
                            type="button"
                            data-toggle="dropdown"
                            className="btn text-white"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="fas fa-palette"></i>
                        </button>
                        <div className="dropdown-menu dropdown-transparent">
                            <>
                                <input
                                    type="color"
                                    list="presetColors"
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setBgColor(e.target.value);
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
                                    <option>#1f385c</option>
                                    <option>#008b8b</option>
                                </datalist>
                            </>
                        </div>

                        <a
                            href="#"
                            onClick={() => {
                                setIsArchieved(!isArchieved);
                            }}
                            className={isArchieved ? "gold-active" : null}
                        >
                            <i className="fa fa-archive"></i>
                        </a>
                        <a
                            href="#"
                            onClick={() => {
                                setIsPinned(!isPinned);
                            }}
                            className={isPinned ? "gold-active" : null}
                        >
                            <i className="fas fa-thumbtack"></i>
                        </a>
                        <a href="#">
                            {/* <i className="fas fa-ellipsis-v ml-auto"></i> */}
                        </a>
                    </div>
                </Portal>
            ) : null}
        </div>
    );
}

export default AddNote;
