import api from "./ApiRecipies";

async function GetIngredients(props) {
    let data = [];
    await api
        .get("/get?rId" + props)
        .then((response) => {
            data = response.data.recipes
        })
        .catch((err) => {
            console.log("Error" + err)
        },)
    return data;

}
export default GetIngredients