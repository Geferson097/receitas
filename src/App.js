import React, {useState} from "react";
import "./styles.css"
import Header from "./Components/header/Header";
import Results from "./Components/body/Results";
import SearchRecipies from "./Components/api/SearchRecipies";
import GetIngredients from "./Components/api/GetIngredients";
import Ingredients from "./Components/body/Ingredients";

const App = () => {

    const [recipies, setRecipies] = useState([])

    async function onSearch(recipieSearch) {
        setRecipies(await SearchRecipies(recipieSearch))
    }

    async function onClickRecipie(ingredientToGet) {
        setRecipies(await GetIngredients(ingredientToGet))
    }

    return (
        <body className="header">
        <div>
            <Header onSearch={onSearch}/>
            <Results onReturn={recipies}/>
            <Ingredients />
        </div>
        </body>
    )
}
export default App;


