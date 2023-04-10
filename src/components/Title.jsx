import React from 'react'

const Title = (props) => {
    const toggle = props.toggle;
    const buttonStyle = {
        "color": toggle ? "black" : "white",
        "backgroundColor": toggle ? "white" : "rgb(7, 14, 24)"
    }

    const titleStyle = {
        "color": toggle ? "white" : "rgb(7, 14, 24)",
    }

    return (
        <div className='titleContainer'>
            <h1 style={titleStyle}>Notes 📝</h1>
            <button
                className='modeToggleButton'
                onClick={props.changeAppearanceMode}
                style={buttonStyle}
            >{toggle ? "Light" : "Dark"} Mode</button>
        </div>
    )
}

export default Title