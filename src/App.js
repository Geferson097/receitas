import React, {useEffect, useState} from "react";
import "./styles.css"
import Header from "./Components/header/Header";
import Results from "./Components/body/Results";
import SearchRecipies from "./Components/api/SearchRecipies";
import GetIngredients from "./Components/api/GetIngredients";
import {Fab} from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';

const App = () => {

    const [recipies, setRecipies] = useState([])
    const [bookmarkes, setBookemarke] = useState([])

    async function onSearch(recipieSearch) {
        const setRecipieSearch = "search?q=" + recipieSearch
        setRecipies(await SearchRecipies(setRecipieSearch))
    }

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    async function onClickRecipie(idRecipieToGetIngredient) {
        const ingredients = await GetIngredients("/get?rId=" + idRecipieToGetIngredient)
        findIngredientsByRecipieId(ingredients, idRecipieToGetIngredient)

    }

    function findIngredientsByRecipieId(receitaDetail, recipieId)
    {
        const updatedRecipies = [...recipies]
        const founded = findOne(updatedRecipies,recipieId)
        founded.ingredients = receitaDetail.ingredients
        setRecipies(updatedRecipies)

    }
    function findOne(recipieToBookmaker,recipieId){
        return recipieToBookmaker.find(recipieToBookmaker => recipieToBookmaker.recipe_id === recipieId)
    }


    function onClickAddBookmark(recipieId){
        const recipieToBookmaker = [...recipies]
        const recipietoAdd = findOne(recipieToBookmaker,recipieId)
        const data = JSON.parse(window.localStorage.getItem("bookmarkes")) || []

        data.push(recipietoAdd)
        window.localStorage.setItem("bookmarkes" ,JSON.stringify(data))

    }

    function onClickShowBookmark(){
        const data = JSON.parse(window.localStorage.getItem("bookmarkes")) || []
        setBookemarke(data)
    }

    return (
        <div className="container">
            <div className="Header">
                <Header onSearch={onSearch}
                        onClickShowBookmark={onClickShowBookmark}
                        bookmarkes={bookmarkes}/>
            </div>
            <>
                <Results onReturn={recipies}
                         onClickAddBookmark={onClickAddBookmark}
                         onClickRecipie={onClickRecipie}/>
            </>
            <div className="copyright" />
        </div>


    )
}
export default App;


