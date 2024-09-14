import express from 'express';
import useConfig from '../config.js';

const router = express.Router();
const {port, domain, year} = useConfig();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Cálamo Pokédex',
            heading: 'Poké Cálamo',
            description: 'Pokédex y combates aleatorios de Pokémon',
            year: year(),
            company: 'Cálamo Azul',
            domain: domain
    })
})

export default router;