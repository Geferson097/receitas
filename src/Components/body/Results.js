import {Card, CardActionArea, CardContent, CardMedia, Fab, Typography} from "@mui/material";
import Ingredients from "./Ingredients";
import useCollapse from "react-collapsed";
import NavigationIcon from "@mui/icons-material/Navigation";
import React, {useState} from "react";


const Results = (props) => {
    const {isExpanded, getToggleProps} = useCollapse();
    return (
        <div className="results-list">
            {props.onReturn.map(receita => {
                    return (
                        <div className="cards">
                            <Card className="card"
                                  {...getToggleProps()}>
                                <CardActionArea
                                    value={receita.recipe_id}
                                    onClick={() => props.onClickRecipie(receita.recipe_id)}>
                                    <CardMedia className="card__img"
                                               component="img"
                                               height="140"
                                               image={receita.image_url}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {receita.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Publisher:
                                            {receita.publisher}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            {isExpanded ? <Ingredients ingredients={receita.ingredients || []}/> : null}
                            <div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )

}
export default Results