import './Form.css'
import InputText from "../inputText";
import React from "react";
import AutoComplete from "../autoComplete";

const Form = () => {
    return (
        <form className= "search">
            <input type="text" className="search__field" placeholder="Muitas Receitas" />
            <button className="btn search__btn">
                <svg className="search__icon">
                </svg>
                <span>Search</span></button>
        </form>
    )
}
export default Form
