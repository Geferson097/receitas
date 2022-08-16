import React, {useState} from "react";
import Form from "./form/Form";
import Bookmarks from "../bookmark/Bookmark";

function Header(props) {
    const [isExpanded, setExpanded] = useState(false);

    function onClickExpandBookmarks(){
        setExpanded(true)
        return(props.onClickShowBookmark)
    }


    console.log(isExpanded)
    return (
        <div className="Header">
            <div className="Header_logo">
                <img src={`${process.env.PUBLIC_URL}/logoHeader.png`} alt="Logo" className="Header_icon "/>
            </div>
            <Form onSearch={props.onSearch}/>
            <div className="Header_nav">
                    <button className="Header_button_bookmark" onClick={onClickExpandBookmarks}
                    onBlur={() => setExpanded(false)}>
                        <img className="Header_icon_bookmarkes" src={`${process.env.PUBLIC_URL}/bookMark.png`}
                             height="70"/>
                    </button>
                    {isExpanded ? <Bookmarks
                        bookmarkes={props.bookmarkes}/> : null}

            </div>
        </div>
    )
}

export default Header
