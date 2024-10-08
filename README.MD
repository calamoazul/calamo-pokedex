# CÁLAMO POKEDEX


![Logo Calamo Pokedex](./public/images/logo_calamo_pokedex.webp)
App realizada con Node y express a partir de la PokeApi para simular el funcionamiento de una Pokédex y realizar funciones añadidas como minijuegos de combates pokémon.

## Historial de versiones

### Versión 1.0.0

- Realizar peticiones a la PokéApi a través de instancias personalizadas de Axios que sirven como Proxy entre Express y la PokeApi.
- Renderizado de plantillas html con ejs y express, mostrando la imagen del pokémon solicitado y su descripción.
- Manejo de errores para mostrar un mensaje personalizado en el caso de que se ponga el nombre de un pokemon que no exista o haya un error en la request
- Enrutamiento a través de la librería Router de Express.
- Testing con Mocha y Chai

## Librerías utilizadas

- Express
- Axios
- Ejs
- Router
- Mocha
- Chai
- Superagent
- Supertest

## Recursos externos

- [Pokeapi](https://pokeapi.co/)

## Licencia

Esta aplicación es de código abierto y usa la Licencia GPL-3.0
