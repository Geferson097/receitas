import React from "react";
import Form from "./form/Form";

function Header(props) {
    return(
        <div >
            <header className="container">
                <img src={`${process.env.PUBLIC_URL}/logoHeader.png`} alt="Logo" className="header__logo" />
                <Form className="search"
                      onSearch={props.onSearch}/>
            </header>
        </div>
    )
}
export default Header
