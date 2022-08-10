import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";

const Form = (props) => {
    const[textValue, setTextValue] = useState("")
    const onChance = (e) => {
        setTextValue(e.target.value)
    };
    return (
        <div className="form">
            <input id="searchInput" name="searchInput" type="text" className="search__field" placeholder="Muitas Receitas..."
                onChange={onChance}
                value={textValue}/>
            <button id="searchButton" name="searchButton" className="btn"
                onClick={()=> props.onSearch(textValue)}>
                <FaSearch/>
                <span>Search</span>
            </button>
        </div>
    )
}
export default Form
