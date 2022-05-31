import axios from 'axios';
import useAuth from "../hooks/useAuth";
const BASE_URL = 'http://localhost:8000';



export default axios.create({
    baseURL: BASE_URL
});
export const axiosPrivate = axios.create({

    baseURL: BASE_URL,
    headers: { 'content-Type': 'application/json'},
    //headers: {  },
    //withCredentials: true
});

