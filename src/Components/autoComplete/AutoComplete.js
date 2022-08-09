import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {useEffect, useState} from "react";
import DataApi from "../api/ApiRecipies";

function AutoComplete(props) {
    const [recipies, setRecipies] = useState([]);
    const [text, setText] = useState('');
    const[sugestions, setSugestions] = useState([])
    useEffect( () => {
        DataApi
            .get("search?q=pizza")
            .then((response) => {
                setRecipies(response.data.recipes)
            })
            .catch((err) => {
                console.log("Error" + err)
            }, []);
    }, [])
    const onSuggestionsHandler = (text) => {
        setText(text);
        setSugestions([])

    }
    const onChangeHandler = (text) => {
        let matches =[]
        if(text.length > 0){
            matches = recipies.filter(rec => {
                const regex = new RegExp(`${text}`,"gi");
                return rec.title.match(regex)
            })
        }
        console.log('matches', matches)
        setSugestions(matches)
        setText(text)
    }
    return(
        <div>
            <input id="RecipieSearch" type="text" className="search__btn" style={{marginTop: 10}}
                   onChange={event => onChangeHandler(event.target.value)}
                   value={text}
                   onBlur={() => { setTimeout(() => { setSugestions([])},100);}}/>

            {sugestions && sugestions.map((sugestions ,i) =>
                <div key={i} className="sugestion col-md-12 justify-content-md-center"
                     onClick={()=>onSuggestionsHandler(sugestions.title)}>
                    {sugestions.title}
                </div>

            )}
        </div>
    )
}
export default AutoComplete

