const renderDescription = async (id) => {

    const url_description = '/pokemon/description/' + id + '/';
    const containerDescription = document.querySelector('#container-description-poke')
    fetch(url_description)
    .then(response => response.json())
    .then(data => {
        console.log('data description', data);
        const {flavor_text_entries} = data;
    
        const entries = flavor_text_entries.filter(entrie => {
            return entrie.language.name == 'es';
        })

        const description = entries[0]?.flavor_text;

        if(description){
            console.log(description);
            containerDescription.innerHTML = description
        }
        else {
            throw new Error("There is not description for this poke");
        }
    })
    .catch((error) => console.error(error))

}

//Function for get pokemon's sprite and render it
const getImage = (sprites) => {
    if(sprites){
        const containerPokedex = document.querySelector('.image-pokemon')
        const classesContainer = Array.from(containerPokedex.classList)
        if(classesContainer.includes('error')){
            containerPokedex.classList.remove('error');
        }
        const sprite = sprites?.front_default;
        containerPokedex.src = sprite;
        containerPokedex.classList.remove('hidden');
    }
    else {
        throw new Error("There is'nt poke image");
    }
}

//Function for get pokemon's description and render it
const getDescription = async (id) => {
    if(id){
        await renderDescription(id);
    }
    else {
        throw new Error("No existe el id del pokemon")
    }
}
export const renderPoke = async ({sprites, id}) => {
    
    try {
        getImage(sprites);
        await getDescription(id);
    }
    catch(error){
        console.error(error)
    }
  
}

export const renderError = (error) => {
    console.error(error);
    const containerDescription = document.querySelector('#container-description-poke')
    const containerPokedex = document.querySelector('.image-pokemon');
    const classesContainer = Array.from(containerPokedex.classList)
    if(!classesContainer.includes('error')){
        containerPokedex.classList.add('error')
    }
    containerDescription.innerHTML = 'No hay resultados';
}

 


