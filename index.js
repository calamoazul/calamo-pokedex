/**
 * @author Óscar Hernández
 * @copyright 2024
 * @license GPL-3.0
 * @version 1.0.0
 */

import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import pokemons from './router/pokemon.js';
import front from './router/index.js';
import useConfig from './config.js';
import ejs from 'ejs';



const {port, host} = useConfig();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.engine('.html', ejs.renderFile);
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use('/', front);
app.use('/pokemon', pokemons);

app.listen(port, host, () => {
    console.log('Api Poke running');
}) 

export default app;