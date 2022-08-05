import React, {useEffect, useState} from "react";
import "./Header.css"
import RecipiesServiceApi from "../recipieApi";
import MuiAutocomplete from 'mui-autocomplete';
function Header() {
    const [user, setUser] = useState();
    useEffect(() => {
        RecipiesServiceApi
            .get("/users/geferson097")
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.log("Error" + err)
            }, []);
    }, [])
    return(
        <div className="produto-container">
                    <MuiAutocomplete
                        placeholder="Recipies"
                        name="Recipies"
                        setvalue={""}
                        setdata={user?.login}
                        template={{title: 'name'}}
                    />
        </div>
    )
}

export default Header
