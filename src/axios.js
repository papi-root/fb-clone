import axios from 'axios'

const instance = axios.create({
    //baseURL: 'http://localhost:9000'
    baseURL: ' https://papi-fb-backend.herokuapp.com'
}) 

export default instance 