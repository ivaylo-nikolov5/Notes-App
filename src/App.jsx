import {React, useState, useEffect} from 'react';
import './css/App.css';
import Title from './components/Title';
import Searchbar from './components/Searchbar';
import Note from "./components/Note";
import AddNote from './components/AddNote';
import {useCookies} from 'react-cookie';

let appearance = {
    "textColor": "white",
    "backgroundColor": "rgb(7, 14, 24)" 
}

function App() {
    
    const [toggle, setToggle] = useState(true);
    const [value, setValue] = useState("");
    const [notes, setNotes] = useState([]);
    const [noteId, setNoteId] = useState(notes.length);
    const notesAsComponents = notes.map((note, index) => {
        return <Note
            key={index}
            toggle={toggle}
            text={note.text}
            deleteNote={deleteNote}
            id={note.id}
        />
    })

    const filteredNotes = [];
    
    notes.forEach(note => {
            if (note.text.includes(value) && value.trim() !== "") {
                filteredNotes.push(note);
            }
    })

    const filteredNotesAsComponents = filteredNotes.map((note, index) => {
        return <Note
            key={index}
            toggle={toggle}
            text={note.text}
            deleteNote={deleteNote}
            id={note.id}
        />
    })

    useEffect(() => {
        const storedData = localStorage.getItem('notes');
        if (storedData) {
            setNotes(JSON.parse(storedData));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
      }, [notes]);

    useEffect(() => {
        Object.keys(appearance).forEach(key => {
          document.body.style[key] = appearance[key];
        });
    }, [toggle]);

    function changeAppearanceMode () {
        setToggle(prevState => !prevState);

        appearance.color = toggle ? "black" : "white";
        appearance.backgroundColor = toggle ? "white" : "rgb(7, 14, 24)";
    }

   


    function deleteNote(index) {
        setNotes(prevNotes => {
            const newNotes = []

            for (let note of prevNotes) {
                if (note.id === index) {
                    continue
                } 

                newNotes.push(note);
            }
            
            
            return newNotes
        });
    }
    return (
        <div
            className='appContainer'
        >
            <div className='title'>
                <Title
                    changeAppearanceMode={changeAppearanceMode}
                    toggle={toggle}
                />
            </div>

            <Searchbar 
                    toggle={toggle}
                    value={value}
                    setValue={setValue}
                />

            <hr className='delimiter' style={{"borderColor": toggle ? "white" : "rgb(7, 14, 24)"}}/>

            <div className='notesContainer'>
                {value.trim() === "" ? notesAsComponents : filteredNotesAsComponents}
                <AddNote 
                    noteId={noteId}
                    setNoteId={setNoteId}
                    setNotes={setNotes}
                />
            </div>
        </div>
    );
}

export default App;