import axios from "axios";
export const API_URL = `https://sycret.ru/service/api/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
export default $api