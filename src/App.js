import React, {useState} from "react";
import "./styles.css"
import Header from "./Components/header/Header";
import Results from "./Components/body/Results";
import SearchRecipies from "./Components/api/SearchRecipies";
import GetIngredients from "./Components/api/GetIngredients";
import {Fab} from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';

const App = () => {

    const [recipies, setRecipies] = useState([])

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

    async function onClickRecipie(ingredientToGet) {
        const setIngredientsSearch = "/get?rId=" + ingredientToGet
        const receitaDetail = await GetIngredients(setIngredientsSearch)
        const updatedRecipies = [...recipies]
        const founded = updatedRecipies.find(updatedRecipie => updatedRecipie.recipe_id === ingredientToGet)
        founded.ingredients = receitaDetail.ingredients
        setRecipies(updatedRecipies)
    }


    return (
        <div className="app_body">
            <Header onSearch={onSearch}/>
            <Results onReturn={recipies}
                     onClickRecipie={onClickRecipie}/>

            <Fab variant="extended" onClick={ScrollToTop} className="button_scrollTop">
                <NavigationIcon/>
                Navigate
            </Fab>
            <div className="copyright" />
        </div>

    )
}
export default App;


