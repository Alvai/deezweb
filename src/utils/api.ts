import axios, { AxiosInstance } from "axios";

const CORS_ANYWHERE_URL: string = "https://horizon-zero-cors.herokuapp.com/";
const API_URL: string = "http://api.bethesleak.ouch";

const api: AxiosInstance = axios.create({
  baseURL: `${CORS_ANYWHERE_URL}${API_URL}`
});

export default api;
