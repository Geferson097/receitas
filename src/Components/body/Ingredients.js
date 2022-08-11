const Ingredients = ({ingredients}) => {
    console.log(ingredients)
    return (
        <div className="recipe__ingredients">
            {ingredients.map(ingredient => <li>{ingredient}</li> )}
        </div>
    )
}
export default Ingredients