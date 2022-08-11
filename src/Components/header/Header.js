import React from "react";
import Form from "./form/Form";

function Header(props) {
    return(
        <body className="body">
            <header className="header body">
                <img src={`${process.env.PUBLIC_URL}/logoHeader.png`} alt="Logo" className="icon__header" />
                <Form className="form"
                      onSearch={props.onSearch}/>
            </header>
        </body>
    )
}
export default Header
