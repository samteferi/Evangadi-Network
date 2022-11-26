import axios from 'axios';
const instance = axios.create({
    baseURL: "https://evangadi-network-server-production.up.railway.app/",
});
export default instance;