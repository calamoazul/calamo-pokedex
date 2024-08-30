/**
 * @author Óscar Hernández
 * @copyright 2024
 * @license GPL-3.0
 * @version 1.0.0
 */

import passport  from 'passport';
import useConfig from '../config.js';
import {ExtractJwt, Strategy as JwtStrategy} from 'passport-jwt';
const {passport_key} = useConfig();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: passport_key
}

passport.use(new JwtStrategy(opts, (decoded, done) => {
    try {
        console.log('decoded jwt', decoded);
    if('decoded', decoded){
        return done(null, false)
    }
    else {
        return(done, null, false);
    }
    }
    catch(error){
        console.error(error);
    }
    

}));




export default passport;