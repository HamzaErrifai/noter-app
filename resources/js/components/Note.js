import React, { useState } from "react";
import Portal from "./inc/Portal";

function Note(props) {
    const { data } = props;
    const [showPortal, setShowPortal] = useState(false);
    const [showPalette, setPalette] = useState(false);

    const [title, setTitle] = useState(data.title);
    const [content, setContent] = useState(data.content);
    const [bgColor, setBgColor] = useState(data.color);

    const closePortal = () => {
        if (title != "" || content != "") {
            let note = {
                title: title,
                content: content,
                archieved: 0,
                pinned: 0,
                color: bgColor,
            };
            //push and pull from DB
            axios.post(`/api/updatenote/${data.id}`, note);
        }
        //close portal
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
                        <a
                            href="#"
                            onClick={() => {
                                setPalette(!showPalette);
                            }}
                        >
                            <i className="fas fa-palette"></i>
                        </a>
                        {showPalette && (
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
                        )}

                        <a href="#">
                            <i className="fa fa-archive"></i>
                        </a>
                        <a href="#">
                            <i className="fas fa-thumbtack"></i>
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
