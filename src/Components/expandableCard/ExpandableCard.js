import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React, {useState} from "react";
import Ingredients from "../body/Ingredients";

function ExpandableCard(props) {

    const [isExpanded , setExpanded] = useState(false)
    function view(){
        isExpanded ? setExpanded(false) : setExpanded(true)
    }

    function onclickFora(){
        document.addEventListener('mousedown', function(e) {
            var view = document.getElementById('Recipe__ingredients');
            var valor
            setExpanded(false)
            console.log('==> view ==> ', view);

            if (!view.contains(e.target)) {
                return valor = Boolean(true)
                setExpanded(false)

            }

            else return valor= Boolean(false)
            console.log('==> aa ==> ', valor);
        });
    }


    return (
        <div className="Cards" id="cards">
        <Card>
            <CardActionArea
                value={props.recipie.recipe_id}
                onClick={() => {
                    props.onClickRecipie(props.recipie.recipe_id)
                    view()
                }}
            onBlur={onclickFora}>
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