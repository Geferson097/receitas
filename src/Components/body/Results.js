import React from "react";
import ExpandableCard from "../expandableCard/ExpandableCard";

const Results = (props) => {
    return (
        <>
            {props.onReturn.map((receita) => {
                    return (
                            <ExpandableCard key={receita.recipe_id}
                                recipie={receita}
                                onClickRecipie={props.onClickRecipie}
                                ingredient={props.Ingredients}
                                onClickAddBookmark={props.onClickAddBookmark}
                                isFavorited={props.receita}/>
                        )})
            }
        </>
    )
}
export default Results