import React from "react";
import {Card, CardContent, Typography} from "@mui/material";

function Bookmarks(props) {
    return (
        < >
            {props.bookmarkes.map(bookmarke => (
            <Card className="bookmark_view" >
                <CardContent>
                        <Typography>
                            {bookmarke.title}
                        </Typography>
                        <Typography >
                            Publisher:
                            {bookmarke.publisher}
                        </Typography>
                </CardContent>
            </Card>
            ))}
        </>
    )
}

export default Bookmarks