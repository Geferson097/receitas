import React, {useState} from "react";
import "./styles.css"
import Header from "./Components/header/Header";
import Results from "./Components/body/Results";
import SearchRecipies from "./Components/api/SearchRecipies";
import GetIngredients from "./Components/api/GetIngredients";


const RECIPE_KEYS = "FAVORITADAS"

const App = () => {
    const [recipies, setRecipies] = useState([])
    const [bookmarkes, setBookemarke] = useState([])
    const [Ingredients, setIngredients] = useState([])

    async function onSearch(recipieSearch) {
        const setRecipieSearch = "search?q=" + recipieSearch
        const data = await SearchRecipies(setRecipieSearch)
        onLoadPage(data)
    }

    function findOne(data, recipe) {
        return data.find(item => item.recipe_id === recipe.recipe_id)
    }

    function onClickAddBookmark(recipe) {
        const data = JSON.parse(window.localStorage.getItem(RECIPE_KEYS)) || []
        const founded = findOne(data, recipe)
        data.push(recipe)
        if(!founded){
            localStorage.setItem(RECIPE_KEYS,JSON.stringify(data))
        }
        else {
            const allRecipiesSaved =  JSON.parse(window.localStorage.getItem(RECIPE_KEYS))
            const recipiesToSave =  allRecipiesSaved.filter(item => item.recipe_id !== recipe.recipe_id)
            if(recipiesToSave){
                localStorage.setItem(RECIPE_KEYS,JSON.stringify(recipiesToSave))
            }
        }
    }

    function onClickShowBookmark() {
        const allRecipiesSaved =  JSON.parse(window.localStorage.getItem(RECIPE_KEYS))
        setBookemarke(allRecipiesSaved)
    }
    async function onClickRecipieDetail(idRecipieToGetIngredient) {
        const setIngredientsSearch = "/get?rId=" + idRecipieToGetIngredient
        findIngredientsByRecipieId(await GetIngredients(setIngredientsSearch),idRecipieToGetIngredient)

    }

    function findIngredientsByRecipieId(receitaDetail, idRecipieToGetIngredient)
    {
        const updatedRecipies = [...recipies]
        const founded = updatedRecipies.find(updatedRecipie => updatedRecipie.recipe_id === idRecipieToGetIngredient)
        founded.ingredients = receitaDetail.ingredients
        setIngredients(receitaDetail)

    }
    
    function onLoadPage(allRecipes){
        const data = JSON.parse(window.localStorage.getItem(RECIPE_KEYS)) || []
        const receitasUpdated = allRecipes.map(item => {
                
             const founded = data.find(t => t.recipe_id === item.recipe_id)
             return {...item, favorited : Boolean(founded) }
            }
        )
        isFavorited()
        setRecipies(receitasUpdated)

    }
    function isFavorited(){
        const favorite =recipies.map(favorite => favorite.favorited)
        return favorite
    }
    return (
        <div className="Container">
            <div className="Header">
                <Header onSearch={onSearch}
                        onClickRecipieDetail={onClickRecipieDetail}
                        onClickShowBookmark={onClickShowBookmark}
                        bookmarkes={bookmarkes || []}
                        Ingredients={Ingredients ||[]}/>

            </div>
            <div className="Searchs_body">
                <Results onReturn={recipies}
                         onClickAddBookmark={onClickAddBookmark}
                         onClickRecipie={onClickRecipieDetail}
                         Ingredients={Ingredients}/>


            </div>
            <div className="copyright"/>
        </div>
    )
}
export default App;


