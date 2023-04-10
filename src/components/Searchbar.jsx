import { React } from 'react'
import "../css/Searchbar.css";

const Searchbar = (props) => {
    const searchbarStyle = {
        "color": props.toggle ? "black" : "white",
        "backgroundColor": props.toggle ? "white" : "rgb(7, 14, 24)"
    }

    function handleChange(event) {
        console.log(event.target.value)
        props.setValue(event.target.value);
    }

    return (
        <div 
            className='searchbarContainer'
            style={searchbarStyle}
        >
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            <input 
                style={searchbarStyle}
                type="text" 
                className='searchbar'
                name='searchbar'
                value={props.value}
                onChange={handleChange}
            />
        </div>
    )
}

export default Searchbar