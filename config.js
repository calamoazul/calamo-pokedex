/**
 * @author Óscar Hernández
 * @copyright 2024
 * @license GPL-3.0
 * @version 1.0.0
 */

const appConfig = () => {

    return {
        api_url: process.env.API_URL,
        host: process.env.HOST,
        port: process.env.PORT,
        enviroment: process.env.NODE_ENV,
        passport_key: process.env.PASSPORT_KEY,
        domain: process.env.DOMAIN,
        api_description: process.env.API_DESCRIPTION,
        year: () => {
            const date = new Date();
            const year = date.getFullYear();
            return year;
        }
    }
}



export default appConfig