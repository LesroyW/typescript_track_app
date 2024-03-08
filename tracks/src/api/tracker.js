import axios from 'axios';

export default axios.create({
    baseURL: 'https://65b9-86-161-45-119.ngrok-free.app'
    //rerun ngrok http 3000 for generating new baseURL
});