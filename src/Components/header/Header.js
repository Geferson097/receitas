import React, {useState} from "react";
import Form from "./form/Form";
import Bookmarks from "../bookmark/Bookmark";

function Header(props) {


    const [isExpanded, setExpanded] = useState(false);

    function onClickExpandBookmarks() {
        isExpanded ? setExpanded(false) : setExpanded(true)
        props.onClickShowBookmark()
    }

    return (
        <>
            <div className="Header_logo">
                <img src={`${process.env.PUBLIC_URL}/logoHeader.png`} alt="Logo" className="Header_icon "/>
            </div>
            <Form onSearch={props.onSearch}/>
            <div className="Header_nav">
                <button className="Header_button_bookmark" onClick={onClickExpandBookmarks}>
                    <img className="Header_icon_bookmarkes"  alt="Bookmark" src={`${process.env.PUBLIC_URL}/bookMark.png` }
                         height="70"/>
                </button>
            </div>

            {isExpanded ? <Bookmarks
                onClickExpandBookmarks={onClickExpandBookmarks}
                onClickRecipieDetail={props.onClickRecipieDetail}
                onClick={onClickExpandBookmarks}
                bookmarkes={props.bookmarkes}
                Ingredients={props.Ingredients || []}/> : null}
        </>
    )

}

export default Header
