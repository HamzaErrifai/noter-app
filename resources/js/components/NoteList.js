import React from "react";
import Note from "./Note";

function NoteList(props) {
    return props?.data?.map((elm) => {
        <Note data={elm} key={elm.id} />;
    });
}

export default NoteList;
