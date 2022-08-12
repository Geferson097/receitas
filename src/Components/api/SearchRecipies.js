import React, {useEffect, useState} from "react";
import api from "./ApiRecipies";

async function SearchRecipies(props) {


    let data = [];
    await api
        .get(props)
        .then((response) => {
            data = response.data.recipes
        })
        .catch((err) => {
            console.log("Error" + err)

        },)
    return data;

}
export default SearchRecipies