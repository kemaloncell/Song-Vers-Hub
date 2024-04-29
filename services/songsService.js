import axios from "axios";
const API_BASE_URL = 'https://z72kaiqudl.execute-api.eu-north-1.amazonaws.com/prod';

export default {
    getSongs(page = 1, size= 20){
        return axios.get(`${API_BASE_URL}/get-songs`, {
            params: {
                page,
                size
            }
        })
    }
}