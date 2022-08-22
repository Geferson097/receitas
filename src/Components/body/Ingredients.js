import {BsCheck2, BsFillBookmarkStarFill} from "react-icons/bs";
import {useEffect, useState} from "react";
const Ingredients = (props) => {
    
    const [favorited, setFavorited] = useState(props.isFavorited.favorited)
    function onclick(){
        if(props.isFavorited.favorited)
        {
            setFavorited(false)
            props.isFavorited.favorited = false
        }
        else {
            setFavorited(true)
            props.isFavorited.favorited = true
        }
        props.onClickAddBookmark()
    }

    return (
        <div className="Recipe__ingredients" id="Recipe__ingredients">
            <h2>Recipe Ingredients</h2>
            <div>
                {props.showButtonBookmark ?
                    <button className="Recipe_btn_bookmark" id="addBookmark"  onClick={onclick}>
                    {favorited ?
                        <BsFillBookmarkStarFill color="lightgreen" className="Recipie_bookmark_icon" /> :
                        <BsFillBookmarkStarFill color="red" className="Recipie_bookmark_icon" /> }
                </button> : []}
            </div>
            <ul  className="Recipe_ingredient__list">
                {props.showIngredients.map(p =>
                    <li key={props.recipe_id}>
                            <BsCheck2 color="green"/>
                        { p}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Ingredients