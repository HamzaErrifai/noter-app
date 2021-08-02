import React, { useEffect, useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import NoWhat from "./utils/NoWhat.js";

function NoteList(props) {
    //#region vars
    const [notes, setNotes] = useState([]);
    const [noNotes, setNoNotes] = useState(true);
    //#endregion

    //#region methods
    const addNote = (note) => {
        setNotes((prevNotes) => prevNotes.concat(note));
    };
    //#endregion

    //#region use effect
    useEffect(() => {
        axios.get("/api/notes").then((resp) => {
            setNotes(resp.data);
            if (resp.data.length > 0) setNoNotes(false);
        });
    }, []);
    //#endregion
    //reverse the the list of notes
    const shownNotes = [...notes].reverse();
    
    return (
        <>
            <AddNote addNote={addNote} />
            <div
                className="container mt-1 d-flex justify-content-center flex-column note-list"
                id="note-list"
            >
                {shownNotes.map((elm) => {
                    return <Note data={elm} key={elm.id} />;
                })}
                {noNotes && <NoWhat what="notes" />}
            </div>
        </>
    );
}

export default NoteList;
