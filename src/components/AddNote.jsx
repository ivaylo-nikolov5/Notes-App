import {React, useState} from 'react';
import "../css/AddNote.css";

const AddNote = (props) => {
    const maxChars = 223;
    const [noteText, setNoteText] = useState("");
    const [remainingChars, setRemainingChars] = useState(223);

    function handleChange(event) {
        const value = event.target.value;
        const currentChars = maxChars - value.length;

        if (remainingChars > 0) {
            setNoteText(value);
            setRemainingChars(currentChars);
        }
       
    }

    function resetText() {
        setNoteText("");
        setRemainingChars(223);
    }

    function deleteLeft() {
        setNoteText(prevText => prevText.slice(0, prevText.length - 1));
        setRemainingChars(prevRemainingChars => prevRemainingChars < 223 ? prevRemainingChars + 1 : prevRemainingChars);
    }

    function saveNote() {
        if (noteText.trim() === "") {
            alert("You cannot save an empty note!");
            return;
        }

        props.setNotes(prevNotes => {
            return [...prevNotes, {text: noteText, id: props.noteId}];
        })

        props.setNoteId(prevId => prevId + 1);
        resetText();
    }

    return (
        <div className='addNoteContainer'>
            <textarea 
                placeholder='Type your note text here...'
                name="noteText" 
                className='addNoteText'
                onChange={handleChange}
                value={noteText}
            ></textarea>

            <div className='addNoteInfo'>
                <p className='remainingChars'>{remainingChars} remaining</p>
                <button 
                    className='resetBtn'
                    onClick={resetText}
                >   <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>

                <button
                    className='resetBtn'
                    onClick={deleteLeft}
                >
                    <i className="fa-solid fa-delete-left"></i>
                </button>

                <button 
                    className='saveBtn'
                    onClick={saveNote}
                >
                    Save 
                </button>
            </div>
        </div>
    )
}

export default AddNote