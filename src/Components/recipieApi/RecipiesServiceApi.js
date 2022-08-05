import axios from "axios";

const RecipiesServiceApi = axios.create({
    baseURL: "https://api.github.com",
});

export default RecipiesServiceApi;