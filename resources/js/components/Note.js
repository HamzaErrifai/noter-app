import axios from "axios";
import React, { useState } from "react";
import Portal from "./inc/Portal";

const convertBoolToNumber = (boolVal) => {
    return boolVal ? 1 : 0;
};

function Note(props) {
    const { data, removeNote } = props;
    const [showPortal, setShowPortal] = useState(false);

    const [title, setTitle] = useState(data.title);
    const [content, setContent] = useState(data.content);
    const [bgColor, setBgColor] = useState(data.color);
    const [isPinned, setIsPinned] = useState(data.pinned);
    const [isArchieved, setIsArchieved] = useState(data.archieved);

    const closePortal = () => {
        if (title != "" || content != "") {
            let note = {
                title: title,
                content: content,
                archieved: convertBoolToNumber(isArchieved),
                pinned: convertBoolToNumber(isPinned),
                color: bgColor,
            };
            if (isPinned) props.refreshPinnedNoteList(data.id);
            if (isArchieved) props.refreshArchivedNoteList(data.id);
            //push to DB
            axios.post(`/api/updatenote/${data.id}`, note);
        }
        //close portal
        setTimeout(() => {
            setShowPortal(false);
        }, 100);
    };

    const deleteNote = () => {
        if (confirm("Delete this Note?"))
            axios.delete("/api/deletenote/" + data.id).then((resp) => {
                setShowPortal(false);
                removeNote(resp.data.id);
            });
    };

    return (
        <div
            className="col note-container"
            style={{ backgroundColor: bgColor }}
            onClick={() => {
                setShowPortal(true);
            }}
        >
            {isPinned == 1 && (
                <div className="d-flex justify-content-end">
                    <i className="fas fa-thumbtack"></i>
                </div>
            )}
            <h3>{title}</h3>
            <p>{content}</p>
            {showPortal ? (
                <Portal show={true} bgColor={bgColor} closePortal={closePortal}>
                    <input
                        type="text"
                        className="inp-area-note"
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
                        <div className="btn-group dropup">
                            <button
                                type="button"
                                data-toggle="dropdown"
                                className="btn text-white"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="fas fa-ellipsis-v ml-auto"></i>
                            </button>
                            <div className="dropdown-menu">
                                <a
                                    className="dropdown-item text-dark"
                                    href="#"
                                    onClick={deleteNote}
                                >
                                    Delete note
                                </a>
                            </div>
                        </div>
                    </div>
                </Portal>
            ) : null}
        </div>
    );
}

export default Note;
