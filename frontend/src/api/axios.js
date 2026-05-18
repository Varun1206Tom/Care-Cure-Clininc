import axios from "axios";

// -----------> LOCALHOST URL <-----------------
const BASE_URL = 'http://localhost:2023/'

export default axios.create({
    baseURL: BASE_URL,
})