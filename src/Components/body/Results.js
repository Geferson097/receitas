import {Card, CardMedia} from "@mui/material";

const Results = (...props) => {
    console.log("results" + props.map(p => props.title))
    return(
        <div className="body">
            <div id="nav-sec">
                <Card className ="card">Menu secundario </Card>
                <ul>
                    <li>
                        <Card>
                        </Card>
                    </li>
                </ul>
            </div>
        </div>


    )

}
export default Results