const axios = require('axios');

// Create an instance of Axios with a base URL
const Axios = axios.create({
    baseURL: 'http://localhost:4000/api/v1/', // Replace this with your base URL
});

export default Axios