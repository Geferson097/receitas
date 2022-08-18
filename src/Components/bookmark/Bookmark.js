import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

function Bookmarks(props) {

    return (
        <div className="Bookmarks_view">
            {props.bookmarkes.map(bookmarke => {
               return(
                   <Card className="Bookmark_card" key={bookmarke.recipe_id}>
                       <CardActionArea
                           onClick={() => props.onClickRecipieDetail(bookmarke.recipe_id)}>
                           <CardMedia className=" preview__fig "
                                      component="img"
                                      image={bookmarke.image_url}/>
                           <CardContent className="card">
                               <Typography>
                                   {bookmarke.title}
                               </Typography>
                               <Typography>
                                   Publisher:
                                   {bookmarke.publisher}
                               </Typography>
                           </CardContent>
                       </CardActionArea>
                   </Card>
               )
            })}
        </div>
    )
}

export default Bookmarks


