import React from "react";
import Note from "./Note";

function NoteList(props) {
    // return props?.data?.map((elm) => {
    //     <Note data={elm} key={elm.id} />;
    // });
    return (
        <div className="container mt-1 d-flex justify-content-center flex-column note-list">
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
        </div>
    );
}

export default NoteList;
