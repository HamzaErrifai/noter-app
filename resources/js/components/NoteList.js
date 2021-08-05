import React, { useEffect, useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import NoWhat from "./utils/NoWhat.js";

/**
 *  generates a list of notes
 *
 * @param {props} isArchive : boolean
 * @return {JSX}
 */
function NoteList(props) {
    //#region vars
    const { isArchive = false } = props;
    const [notes, setNotes] = useState([]);
    const [noNotes, setNoNotes] = useState(true);
    const refreshBtn = setInterval(() => {
        document.getElementById("rfrshBtn").classList.add("btn-refresh-show");
    }, 10000);
    //#endregion

    //#region use effect
    useEffect(() => {
        let isMounted = true;
        if (isMounted) fetchDataFromApi();
        return () => {
            isMounted = false;
        };
    }, []);
    //#endregion

    //#region methods
    /**
     * gets data from api and sets "Notes" state
     */
    const fetchDataFromApi = () => {
        axios.get("/api/notes").then((resp) => {
            setNotes(resp.data);
            if (resp.data.length > 0) setNoNotes(false);
        });
    };
    /**
     *  updates the value of pinned
     *
     * @param {Integer} noteId
     * @param {boolean} isPinned
     */
    const refreshPinnedNoteList = (noteId, isPinned) => {
        const copyNotes = [...notes];
        const index = copyNotes.indexOf(
            copyNotes.find((elm) => elm.id == noteId)
        );
        if (index > -1) copyNotes[index].pinned = isPinned ? 1 : 0;
        setNotes(copyNotes);
    };
    /**
     *  updates the value of archieved
     *
     * @param {Integer} noteId
     * @param {boolean} archieved
     */
    const refreshArchivedNoteList = (noteId, isArchieved) => {
        const copyNotes = [...notes];
        const index = copyNotes.indexOf(
            copyNotes.find((elm) => elm.id == noteId)
        );
        if (index > -1) copyNotes[index].archieved = isArchieved ? 1 : 0;
        setNotes(copyNotes);
    };
    /**
     *  Prepares the list of notes before rendering it
     *
     * @returns {Array}
     */
    const prepareNoteList = () => {
        const copyNotes = [...notes];
        if (!isArchive) {
            const pinnedNotes = copyNotes
                .filter((elm) => elm.pinned == 1 && elm.archieved == 0)
                .reverse();

            const otherNotes = copyNotes
                .filter((elm) => elm.pinned == 0 && elm.archieved == 0)
                .reverse();

            return pinnedNotes.concat(otherNotes);
        }
        return copyNotes.filter((elm) => elm.archieved == 1).reverse();
    };
    /**
     * Adds an note to the list
     *
     * @param {Object} note
     */
    const addNote = (note) => {
        setNotes((prevNotes) => prevNotes.concat(note));
    };
    /**
     * Removes a note by its id from the list
     *
     * @param {Integer} id
     */
    const removeNote = (id) => {
        const copyNotes = [...notes];
        const index = copyNotes.indexOf(copyNotes.find((elm) => elm.id == id));
        if (index > -1) copyNotes.splice(index);
        setNotes(copyNotes);
    };
    //#endregion

    const shownNotes = prepareNoteList();

    return (
        <>
            {!isArchive && (
                <>
                    <div className="add-parent">
                        <AddNote addNote={addNote} />
                    </div>
                    <a
                        className="btn-refresh shadow"
                        id="rfrshBtn"
                        onClick={() => {
                            document
                                .getElementById("rfrshBtn")
                                .classList.remove("btn-refresh-show");
                            fetchDataFromApi();
                        }}
                    >
                        <i className="fas fa-sync-alt"></i>
                    </a>
                </>
            )}
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
                            refreshPinnedNoteList={refreshPinnedNoteList}
                            refreshArchivedNoteList={refreshArchivedNoteList}
                        />
                    );
                })}
                {noNotes && <NoWhat what="notes" />}
            </div>
        </>
    );
}

export default NoteList;
