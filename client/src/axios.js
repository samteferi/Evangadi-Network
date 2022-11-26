import axios from 'axios';
const instance = axios.create({
    // baseURL: "https://evangadi-network-server-production.up.railway.app/",
    baseURL: "http://localhost:4000/",
});
export default instance;