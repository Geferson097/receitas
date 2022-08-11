import React, {useState} from "react";
import "./styles.css"
import Header from "./Components/header/Header";
import Results from "./Components/body/Results";
import SearchRecipies from "./Components/api/SearchRecipies";
import GetIngredients from "./Components/api/GetIngredients";

const App = () => {

    const [recipies, setRecipies] = useState([])

    async function onSearch(recipieSearch) {
        const setRecipieSearch = "search?q=" + recipieSearch
        setRecipies(await SearchRecipies(setRecipieSearch))
    }

    async function onClickRecipie(ingredientToGet) {
        const setIngredientsSearch = "/get?rId=" + ingredientToGet
        const receitaDetail = await GetIngredients(setIngredientsSearch)
        const updatedRecipies = [...recipies]
        const founded = updatedRecipies.find(updatedRecipie => updatedRecipie.recipe_id == ingredientToGet)
        founded.ingredients = receitaDetail.ingredients
        setRecipies(updatedRecipies)

    }

    return (
        <body className="body">
        <div >
            <Header onSearch={onSearch}/>
            <Results onReturn={recipies}
                     onClickRecipie={onClickRecipie}/>
        </div>
        </body>
    )
}
export default App;


