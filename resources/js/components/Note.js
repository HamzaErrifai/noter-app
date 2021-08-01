import React, { useState } from "react";
import Portal from "./inc/Portal";

function Note(props) {
    const { data } = props;
    const [showPortal, setShowPortal] = useState(false);
    const [showPalette, setPalette] = useState(false);

    const [title, setTitle] = useState(data.title);
    const [content, setContent] = useState(data.content);
    const [bgColor, setbgColor] = useState(data.color);
    const closePortal = () => {
        // exampleData = {
        //     ...exampleData,
        //     title: title,
        //     content: content,
        //     color: bgColor,
        // };
        //modify post

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
                                    e.preventDefault;
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

export default Note;
