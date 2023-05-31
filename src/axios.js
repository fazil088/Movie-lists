import axios from "axios";
import { baseUrl,language,page,accessToken } from "./Constants/constants";

const instance = axios.create({
    baseURL  : baseUrl,
    params : {
        language,
        page,
    },
    headers:{
        accept:'application/json',
        Authorization: `Bearer ${accessToken}`
    }

});



export default instance 