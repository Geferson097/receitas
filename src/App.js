import React, {useState} from "react";
import styles from "./styles.css"
import Header from "./Components/header/Header";
import Results from "./Components/body/Results";
import GetRecipies from "./Components/api/GetRecipies";

const App = () => {

    const [recipies , setRecipies] = useState([])

    async function onSearch(recipieSearch){
        console.log(recipieSearch)
        const data = await GetRecipies(recipieSearch)
        setRecipies(data)

    }
    function setValues(){
        recipies.map(rec =>
            recipies.title
        )
    }
    console.log(recipies)
    return (

        <body>
            <div >
                <Header onSearch={onSearch} />
                <Results onReturn={recipies}/>
            </div>
        </body>


    )
}
export default App;


