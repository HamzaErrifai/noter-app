import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AddNote from "./AddNote";
import NavBar from "./inc/NavBar";
import SmallFooter from "./inc/SmallFooter";
import NoteList from "./NoteList";

function Main() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
    }, []);
    return (
        <>
            <NavBar />
            <NoteList data={notes} />
            <AddNote/>
            <SmallFooter/>
        </>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
