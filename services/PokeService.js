/**
 * @author Óscar Hernández
 * @copyright 2024
 * @license GPL-3.0
 * @version 1.0.0
 */

import axios from 'axios';
import useConfig from '../config.js'
import Cookies from 'js-cookie'
const {api_description} = useConfig();

const pokeAxios = axios.create({
    baseUrl: api_description,
    timeout: 3000,
    headers: {'Accept': 'application/json'},
    withCredentials: false,
    responseEncoding: 'utf8'
})

pokeAxios.interceptors.request.use((config) => {

    const cookie = Cookies.get('Bearer')
    if(cookie){
        config.headers.Authorization = 'Bearer' + JSON.parse(cookie)
    }
    return config;
}, err => {
    return Promise.reject(err);
})

export default pokeAxios;