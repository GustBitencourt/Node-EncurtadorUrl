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
}