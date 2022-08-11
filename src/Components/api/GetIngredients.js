import api from "./ApiRecipies";

async function GetIngredients(props) {
    let data = [];
    await api
        .get(props)
        .then((response) => {
            data = response.data.recipe
        })
        .catch((err) => {
            console.log("Error" + err)
        },)
    return data;

}
export default GetIngredients