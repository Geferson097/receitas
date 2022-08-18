
const Ingredients = (props) => {
    console.log('==> props ==> ', props.ingredient);
   return (
        <div >
            <tr className="recipe__ingredients">
                <button className="recipie_bookmark"
                onClick={props.onClickAddBookmark}>
                    <img className="recipie_bookmark_icon" src={`${process.env.PUBLIC_URL}/bookmarkAdd.png`}/>

                </button>
                <td>
                    {props.ingredient.title}
                </td>
            </tr>
        </div>
    )
}
export default Ingredients