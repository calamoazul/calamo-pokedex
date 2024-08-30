import express from 'express';
import usePokeController from '../controllers/PokeController.js';
import Cookies from 'js-cookie';
import passport from '../controllers/AuthController.js';

const router = express.Router();
const pokeController = usePokeController()


router.get('/:poke', async (req, res) => {
    let cookie = Cookies.get('Bearer');

    if(!cookie){
        Cookies.set('Bearer', 'coookie de prueba');
    }
    const pokemon = req.params.poke
    const response = await pokeController.getPoke(pokemon);
    return res.send(response)
})
router.get('/description/:id', async (req, res) => {

    const idPoke = req.params.id
    const response = await pokeController.getDescription(idPoke)
    return res.send(response);
});

router.post('/:poke/:id', passport.authenticate('jwt', {session:false}), async (req, res, next) => {
    const auth = res.get('Authorization');
    if(!auth || auth.empty == 0){
        return res.sendStatus(401);
    }
    else {
       
        const pokemon = req.params.poke
        const response = await pokeController.getPoke(pokemon);
    
        if(response.status == 200){
           return res.send(response.data)
        }
    }
    next();
});


export default router;