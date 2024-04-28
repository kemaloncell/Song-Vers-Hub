import axios from 'axios';
import { useConfig } from "~/composables";

const { getLanguage} = useConfig();

const API_BASE_URL = 'https://z72kaiqudl.execute-api.eu-north-1.amazonaws.com/prod';
const lang = getLanguage.value || 'tr'
export default {
    getLyrics(path){
        return axios.get(`${API_BASE_URL}/get-lyrics`, {
            params: {
                path,
                lang
            }
        })
    }
}