import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";

const Form = (props) => {
    const[textValue, setTextValue] = useState("")
    const onChange = (e) => {
        setTextValue(e.target.value)
    };
    const onPressEnter = (e) => {
        if (e.which === 13 || e.keyCode === 13) {props.onSearch(textValue)}
    }
    return (
        <div className="container">
            <input id="searchInput" name="searchInput" type="text" className="search__field" placeholder="Muitas Receitas..."
                onChange={onChange}
                onKeyPress={onPressEnter}
                value={textValue}/>
            <button id="searchButton" name="searchButton" className="btn "
                onClick={()=> props.onSearch(textValue)}>
                <FaSearch/>
                <span>Search</span>
            </button>
        </div>
    )
}
export default Form
