import React, {useState} from "react";
import "./styles.css"
import Header from "./Components/header/Header";
import Results from "./Components/body/Results";
import SearchRecipies from "./Components/api/SearchRecipies";
import GetIngredients from "./Components/api/GetIngredients";

const App = () => {
    const RECIPE_KEYS = "FAVORITADAS"
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

    function findIngredientsByRecipieId(receitaDetail, recipieId) {
        const updatedRecipies = [...recipies]
        const founded = findOne(updatedRecipies, recipieId)
        founded.ingredients = receitaDetail.ingredients
        setRecipies(updatedRecipies)

    }

    function findOne(data, recipie) {

    }

    function onClickAddBookmark(recipe) {
        const data = JSON.parse(window.localStorage.getItem(RECIPE_KEYS)) || []
        const founded =  data.find(item => item.recipe_id === recipe.recipe_id)
        console.log('==> data ==> ', founded);
        data.push(recipe)
        if(!founded){
            console.log('==> achou ==> ', data.map(d => d.recipe_id));
            localStorage.setItem(RECIPE_KEYS,JSON.stringify(data))

        }


    }


    function onClickShowBookmark() {
        var value = []
        for (var i = 0; i < localStorage.length; i++) {
            value.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        setBookemarke(value)
    }

    return (
        <div className="container">
            <Header onSearch={onSearch}
                    onClickRecipieDetail={onClickRecipie}
                    onClickShowBookmark={onClickShowBookmark}
                    bookmarkes={bookmarkes}/>
            <Results onReturn={recipies}
                     onClickAddBookmark={onClickAddBookmark}
                     onClickRecipie={onClickRecipie}/>

            <div className="copyright"/>
        </div>
    )
}
export default App;


