import React, { useEffect, useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import NoWhat from "./utils/NoWhat.js";

function NoteList() {
    //#region vars
    const [notes, setNotes] = useState([]);
    const [noNotes, setNoNotes] = useState(true);
    //#endregion

    //#region methods
    const addNote = (note) => {
        setNotes((prevNotes) => prevNotes.concat(note).reverse());
    };
    //#endregion

    //#region use effect
    useEffect(() => {
        axios.get("/api/notes").then((resp) => {
            setNotes(resp.data.reverse());
            if (resp.data.length > 0) setNoNotes(false);
        });
    }, []);
    //#endregion

    return (
        <>
            <AddNote addNote={addNote} />
            <div className="container mt-1 d-flex justify-content-center flex-column note-list">
                {notes.map((elm) => {
                    return <Note data={elm} key={elm.id} />;
                })}
                {noNotes && <NoWhat what="notes" />}
            </div>
        </>
    );
}

export default NoteList;
