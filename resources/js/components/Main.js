import ReactDOM from "react-dom";
import NavBar from "./inc/NavBar";
import SmallFooter from "./inc/SmallFooter";
import NoteList from "./NoteList";
import "animate.css";


function Main() {
    return (
        <>
            <NavBar />
            <NoteList />
            <SmallFooter />
        </>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
