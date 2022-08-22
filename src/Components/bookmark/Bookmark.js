import React from "react";
import ExpandableCard from "../expandableCard/ExpandableCard";

function Bookmarks(props) {

    return (
        <div className="Bookmarks_view" id="Bookmarks_view">
            {props.bookmarkes.map((receita) => {
                return (
                    <ExpandableCard key={receita.recipe_id}
                                              recipie={receita}
                                              onClickRecipie={props.onClickRecipieDetail}
                                              ingredient={props.Ingredients || []}
                                              showButtonBookmark={false}/>
                )
            })
            }
        </div>
    )
}
export default Bookmarks


