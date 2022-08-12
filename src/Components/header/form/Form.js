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
        <div className="form_content">
            <input id="searchInput" name="searchInput" type="text" className="header_search__field" placeholder="Muitas Receitas..."
                onChange={onChange}
                onKeyPress={onPressEnter}
                value={textValue}/>
            <button id="searchButton"  type="button" name="searchButton" className="header_btn_search"
                onClick={()=> props.onSearch(textValue)}>
                <FaSearch/>
                <span>Search</span>
            </button>
        </div>
    )
}
export default Form
