import React, {useEffect, useState} from "react";
import RecipieServiceApi from "../recipieApi/RecipiesServiceApi";

function GetData() {
    const [recipies, setRecipies] = useState([]);
    return (
        useEffect(() => {
            RecipieServiceApi()
                .get("search?q=pizza")
                .then((response) => {
                    setRecipies(response.data.recipes)
                })
                .catch((err) => {
                    console.log("Error" + err)
                }, []);
        }, [])
    )
}

export default GetData
