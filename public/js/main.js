import {renderPoke, renderError} from './poke_functions.js';

const searchPoke = () => {

    const inputSearch = document.querySelector('#poke-search');
    const namePoke = document.querySelector('#heading-poke-data');
    const formPoke = document.querySelector('#form-api');
    inputSearch.addEventListener('input', (evt) => {
        evt.preventDefault();
        namePoke.textContent = inputSearch.value
      
    })
    formPoke.addEventListener('submit', async (evt) => {
        evt.preventDefault();
        let poke = inputSearch.value.toLowerCase(); 
        fetch('/pokemon/' + poke )
        .then(response => response.json())
        .then(data => renderPoke({...data}))
        .catch(error => renderError(error))
    })

}


window.addEventListener('load', searchPoke);