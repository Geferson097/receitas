import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

function Bookmarks(props) {
    

    return (
        <div className="Bookmarks_view">
            {props.bookmarkes.map(bookmarke => {
                return (
                    bookmarke.map(r => (
                        <Card className="Bookmark_card">
                            <CardActionArea
                                >
                                <CardMedia className=" preview__fig "
                                           component="img"
                                           image={r.image_url}/>
                                <CardContent className="card">
                                    <Typography>
                                        {r.title}
                                    </Typography>
                                    <Typography>
                                        Publisher:
                                        {r.publisher}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                )
            })}
        </div>
    )
}

export default Bookmarks


