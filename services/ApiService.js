/**
 * @author Óscar Hernández
 * @copyright 2024
 * @license GPL-3.0
 * @version 1.0.0
 */

import axios from 'axios'
import useConfig from '../config.js'
import Cookies from 'js-cookie'
const {api_url} = useConfig();

const httpAxios = axios.create({
    baseUrl: api_url,
    timeout: 30000000,
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    withCredentials: false,
    responseEncoding: 'utf8'
})


httpAxios.interceptors.request.use(
    (config) => {
        const cookie = Cookies.get('Bearer')
        if(cookie){
           config.headers.Authorization = 'Bearer:' + Json.parse(cookie);
        }
        return config;
    }, (err)=> {
        return Promise.reject(err);
    }
)

export default httpAxios;