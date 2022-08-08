import React, {useEffect, useState} from "react";
import "./Header.css"
import DataApi from "../api/GetRecipies";
import Form from "../form";

function Header(props) {
    const [recipies, setRecipies] = useState([]);
    useEffect( () => {
        DataApi
            .get("search?q=" + "pizza")
            .then((response) => {
                setRecipies(response.data.recipes)
            })
            .catch((err) => {
                console.log("Error" + err)
            }, []);
    }, [])

    return(
        <div >
            <header className="container">
                <img src={`${process.env.PUBLIC_URL}/logoHeader.png`} alt="Logo" className="header__logo" />
                <Form className="search" />
            </header>


        </div>
    )



}

export default Header
