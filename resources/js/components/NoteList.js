import React from "react";
import Note from "./Note";

function NoteList(props) {
    // return props?.data?.map((elm) => {
    //     <Note data={elm} key={elm.id} />;
    // });
    return (
        <div className="container mt-5">
            {/* <div className="row "> */}
                <Note />
                <Note />
            {/* </div> */}
            
        </div>
    );
}

export default NoteList;
