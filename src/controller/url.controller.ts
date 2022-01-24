import { Request, Response } from 'express';
import shortId from 'shortid';
import { config } from '../config/Constants';

export class UrlController {
    public async shorten( req: Request, res: Response ): Promise<void> {
        //verificar se já existe
        //criar hash pra url
        const { originURL } = req.body;
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`
        //salvar url no banco
        //retornar url salva


        res.json({ originURL, hash, shortURL});
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        //pegar hash da url
        const { hash } = req.params;
        //encontrar a url original através do hash
        const url = {
            "originURL":"mongodb+srv://GustBitencourt:<gustavo1>@encurtadorurl.2n6ol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            "hash":"6ibDM7RkG",
            "shortURL": "http://localhost:5000/6ibDM7RkG"
        }

        //redirecionar pra url original
        res.redirect(url.originURL)


    }
}