import {BsCheck2, BsFillBookmarkStarFill} from "react-icons/bs";
import {useState} from "react";
const Ingredients = (props) => {
    
    const [favorited, setFavorited] = useState(props.isFavorited)
    function onclick(){

        if (props.isFavorited){
            setFavorited(true)
            console.log('==> favorited ==> ', favorited);
        }
        else {
            setFavorited(false)
        }
        props.onClickAddBookmark()

    }
    return (
        <div className="Recipe__ingredients">
            <h2>Recipe Ingredients</h2>
                <button className="Recipe_btn_bookmark"
                onClick={onclick}>
                    {favorited ?
                        <BsFillBookmarkStarFill color="lightgreen" className="Recipie_bookmark_icon" /> :
                        <BsFillBookmarkStarFill color="red" className="Recipie_bookmark_icon" /> }

                </button>
            <ul  className="Recipe_ingredient__list">
                {props.showIngredients.map(p =>
                    <li>
                            <BsCheck2 color="green"/>
                        { p}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Ingredients