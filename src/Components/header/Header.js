import React from "react";
import Form from "./form/Form";

function Header(props) {
    return(
        <div className="header">
            <div>
                <img src={`${process.env.PUBLIC_URL}/logoHeader.png`} alt="Logo" className="header_icon " />
            </div>
            <Form onSearch={props.onSearch}/>
            <div>
                <img src={`${process.env.PUBLIC_URL}/bookMark.png`} alt="bookmark" className="header_icon_bookmarkes"/>
            </div>

        </div>
    )
}
export default Header
