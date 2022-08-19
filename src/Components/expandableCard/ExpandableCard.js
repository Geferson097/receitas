import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";
import useCollapse from "react-collapsed";
import Ingredients from "../body/Ingredients";

function ExpandableCard(props) {
    const {isExpanded, getToggleProps} = useCollapse();
    return (
        <div className="Cards">
        <Card
              {...getToggleProps()}>
            <CardActionArea
                value={props.recipie.recipe_id}
                onClick={() => props.onClickRecipie(props.recipie.recipe_id)}>
                <CardMedia className="card-img"
                           component="img"
                           height="140"
                           image={props.recipie.image_url}/>
                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {props.recipie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Publisher:
                        {props.recipie.publisher}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
            <div >
                {isExpanded ? <Ingredients
                    isFavorited={props.recipie.favorited}
                    onClickAddBookmark={() => props.onClickAddBookmark(props.recipie)}
                    showIngredients={props.ingredient.ingredients|| []}/> : null}
            </div>
            </div>
    )

}

export default ExpandableCard