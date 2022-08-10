import React from "react";
import Form from "./form/Form";

function Header(props) {
    return(
        <div >
            <header className="header">
                <img src={`${process.env.PUBLIC_URL}/logoHeader.png`} alt="Logo" className="icon__header" />
                <Form className="form"
                      onSearch={props.onSearch}/>
            </header>
        </div>
    )
}
export default Header
