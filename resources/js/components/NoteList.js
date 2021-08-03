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
    const refreshNoteList = (noteId) => {
        const copyNotes = [...notes];
        const index = copyNotes.indexOf(
            copyNotes.find((elm) => elm.id == noteId)
        );
        if (index > -1) copyNotes[index].pinned = 1;
        setNotes(copyNotes);
    };
    const prepareNoteList = () => {
        const copyNotes = [...notes];
        const pinnedNotes = copyNotes
            .filter((elm) => elm.pinned == 1)
            .reverse();
        const otherNotes = copyNotes.filter((elm) => elm.pinned != 1).reverse();

        return pinnedNotes.concat(otherNotes);
    };
    const addNote = (note) => {
        setNotes((prevNotes) => prevNotes.concat(note));
    };
    const removeNote = (id) => {
        const copyNotes = [...notes];
        const index = copyNotes.indexOf(copyNotes.find((elm) => elm.id == id));
        if (index > -1) copyNotes.splice(index);
        setNotes(copyNotes);
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

    const shownNotes = prepareNoteList();

    return (
        <>
            <AddNote addNote={addNote} />
            <div
                className="container mt-1 d-flex justify-content-center flex-column note-list"
                id="note-list"
            >
                {shownNotes.map((elm) => {
                    return (
                        <Note
                            data={elm}
                            key={elm.id}
                            removeNote={removeNote}
                            refreshNoteList={refreshNoteList}
                        />
                    );
                })}
                {noNotes && <NoWhat what="notes" />}
            </div>
        </>
    );
}

export default NoteList;
