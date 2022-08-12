const Ingredients = ({ingredients}) => {
    console.log(ingredients)
    return (
        <div className="recipe_ingredients">
            {ingredients.map(ingredient => <li>{ingredient}</li> )}
        </div>
    )
}
export default Ingredients