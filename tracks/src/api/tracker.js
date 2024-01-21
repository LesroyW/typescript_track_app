import axios from 'axios';

export default axios.create({
    baseURL: 'https://c24e-86-161-45-94.ngrok-free.app'
    //rerun ngrok http 3000 for generating new baseURL
});