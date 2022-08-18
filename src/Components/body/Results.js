import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Ingredients from "./Ingredients";
import useCollapse from "react-collapsed";
import React from "react";

const Results = (props) => {
    const {isExpanded, getToggleProps} = useCollapse();

    return (
        <div className="Searchs_body">
            {props.onReturn.map((receita) => {
                    return (
                        <div className="cards" key={receita.recipe_id}>
                            <Card className="card"
                                  {...getToggleProps()}>
                                <CardActionArea

                                    value={receita.recipe_id}
                                    onClick={() => props.onClickRecipie(receita.recipe_id)}>
                                    <CardMedia className="card__img"
                                               component="img"
                                               height="140"
                                               image={receita.image_url}/>
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
                            <div>
                            {isExpanded ? <Ingredients
                                onClickAddBookmark={() => props.onClickAddBookmark(receita)}
                                ingredient={receita || []}/> : null}
                            </div>
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