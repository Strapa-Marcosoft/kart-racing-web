import axios from "axios";

export const kartRacingApi = axios.create({
    baseURL: "http://localhost:8080",
});


export default kartRacingApi;