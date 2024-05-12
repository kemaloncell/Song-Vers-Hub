import {$fetch} from "ofetch";

const API_BASE_URL = 'https://z72kaiqudl.execute-api.eu-north-1.amazonaws.com/prod';
export const serviceRequest = async (path: string, options = {}) => {
    return await $fetch(`${API_BASE_URL}/${path}`, options)
}
