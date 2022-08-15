import React from "react";
import Form from "./form/Form";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {color} from "@mui/system";
import Bookmarks from "../bookmark/Bookmark";

function Header(props) {

    return(
        <div className="header">
            <div>
                <img src={`${process.env.PUBLIC_URL}/logoHeader.png`} alt="Logo" className="header_icon " />

            </div>
            <Form onSearch={props.onSearch}/>
            <div>
                <Card className="header_button_bookmarkes">
                    <CardActionArea onClick={props.showBookmarks}>
                        <CardMedia >
                            <img onClick={props.onClickShowBookmark} className="header_icon_bookmarkes" src={`${process.env.PUBLIC_URL}/bookMark.png`}
                                 height="70"/>
                            <Bookmarks showBookmarks={props.onClickShowBookmark} />
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}
export default Header
