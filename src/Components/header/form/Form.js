import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";

const Form = (props) => {
    const [textValue, setTextValue] = useState("")
    const onChange = (e) => {
        setTextValue(e.target.value)
    };
    const onPressEnter = (e) => {
        if (e.which === 13 || e.keyCode === 13) {
            props.onSearch(textValue)
        }
    }
    return (
        <>
            <div className="Header_input">
                <input id="searchInput" name="searchInput" type="text" className="Header_search__field"
                       placeholder="Muitas Receitas..."
                       onChange={onChange}
                       onKeyPress={onPressEnter}
                       value={textValue}/>
            </div>
            <div className="Header_button">
                <button id="searchButton" type="button" name="searchButton" className="Header_btn_search"
                        onClick={() => props.onSearch(textValue)}>
                    <FaSearch/>
                    <span>Search</span>
                </button>
            </div>
        </>
    )
}
export default Form
