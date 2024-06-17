import axios from "axios";

const API_BASE_URL = "http://localhost:5555/api";

const api = axios.create({
    baseURL: API_BASE_URL,
});

export default api;