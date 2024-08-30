/**
 * @author Óscar Hernández
 * @copyright 2024
 * @license GPL-3.0
 * @version 1.0.0
 */

import useConfig from '../config.js';

import httpAxios from '../services/ApiService.js';
import pokeAxios from '../services/PokeService.js';
const {api_url, api_description } = useConfig();

class PokeController
{
    
    constructor(url, url_description){
        this.api_url = url;
        this.api_description = url_description;
    }

    getPoke = async (pokemon) => {
        try {
            
            const dataPokemon = await httpAxios.get(api_url + pokemon)
            if(dataPokemon.status = 200){
                return dataPokemon.data;
            }
            else{
                return dataPokemon.status;
            }
           
        }
        catch(error){
            console.error('error de GetPoke', error)
        }
    }

    getImage = (pokemon) => 
    {
        const sprite = pokemon.sprites?.front_default;
        return sprite
    }

    getDescription = async (id) => {
        const url = this.api_description + id + '/'
        try {
            const descriptionPokemon = await pokeAxios.get(url)
            return descriptionPokemon.data;
        }
        catch(error) {
            return error.message
        }
    } 
}

const usePokeController = () => {
    return new PokeController(api_url, api_description);
}

export default usePokeController;