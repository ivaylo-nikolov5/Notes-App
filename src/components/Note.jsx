import React from 'react';
import "../css/Note.css";

const Note = (props) => {
    const toggle = props.toggle;
    const date = new Date();
    
    const containerStyle = {
        "backgroundColor": toggle ? "white" : "rgb(7, 14, 24)",
        "color": toggle ? "black" : "white"
    }

    function removeNote() {
        props.deleteNote(props.id)
    }

    return (
        <div className='noteContainer' style={containerStyle}>
            <p className='noteText'>{props.text}</p>

            <div className='noteInfo'>
                <p className='noteDate'>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
                <i 
                    className="fa-solid fa-trash"
                    onClick={removeNote}
                ></i>
            </div>
        </div>
    )
}

export default Note