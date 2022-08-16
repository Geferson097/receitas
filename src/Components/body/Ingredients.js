
const Ingredients = (props) => {
   return (
        <div className="Results_body">
            <tr className="recipe__ingredients">
                <button className="recipie_bookmark"
                onClick={props.onClickAddBookmark}>
                    <img className="recipie_bookmark_icon" src={`${process.env.PUBLIC_URL}/bookmarkAdd.png`}/>

                </button>
                {props.ingredients.map(ingredient =>
                    <td>
                        <img src={`${process.env.PUBLIC_URL}/checkMarkIcon.png`}/>
                        {ingredient}
                    </td>)}
            </tr>
        </div>
    )
}
export default Ingredients