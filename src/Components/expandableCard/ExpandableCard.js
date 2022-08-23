import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React, {useState} from "react";
import Ingredients from "../body/Ingredients";

function ExpandableCard(props) {

    const [isExpanded , setExpanded] = useState(false)
    // function setOpen(){
    //     isExpanded ? setExpanded(false) : setExpanded(true)
    // }
    //
    // function onclickFora(){
    //     document.addEventListener('mousedown', function(e) {
    //         var view = document.getElementById('cards');
    //         var cardButton = document.getElementById('cardButton')
    //         console.log('==> view ==> ', cardButton);
    //         console.log(e.target.offsetParent)
    //         if (e.target.offsetParent.contains(view)){
    //             setExpanded(false)
    //         }
    //         else setExpanded(true)
    //     });
    //
    // }


    return (
        <div className="Cards" id="cards">
        <Card>
            <CardActionArea id='cardButton'
                value={props.recipie.recipe_id}
                onClick={() => {
                    props.onClickRecipie(props.recipie.recipe_id)
                    setExpanded(!isExpanded)
                }}>
                <CardMedia className="card-img"
                           component="img"
                           height="140"
                           image={props.recipie.image_url}/>
                <CardContent>

                    <Typography  variant="h5" component="div">
                        {props.recipie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Publisher:
                        {props.recipie.publisher}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
            <div>
                {isExpanded ? <Ingredients
                    showButtonBookmark={props.showButtonBookmark}
                    isFavorited={props.recipie}
                    onClickAddBookmark={() => props.onClickAddBookmark(props.recipie)}
                    showIngredients={props.ingredient.ingredients|| []}/> : null}
            </div>
            </div>
    )

}

export default ExpandableCard