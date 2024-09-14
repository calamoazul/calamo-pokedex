/**
 * @author Óscar Hernández
 * @copyright 2024
 * @license GPL-3.0
 * @version 1.0.0
 */
import express from 'express';
const router = express.Router();
import useConfig from '../config.js';

const {port} = useConfig();

router.post('/register', (req, res) => {

});

router.post('/login', (req, res) => {

})