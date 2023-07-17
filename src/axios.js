/* The code is importing the `axios` library and some constants from a file called `constants.js`. It
then creates an instance of `axios` with some default configurations, such as the base URL, query
parameters, and headers. The instance is then exported as the default export of the module. This
allows other parts of the code to import and use this instance to make HTTP requests. */
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