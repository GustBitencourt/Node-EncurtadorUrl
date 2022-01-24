import { URLModel } from '../database/model/URL';
import { Request, Response } from 'express';
import shortId from 'shortid';
import { config } from '../config/Constants';

export class UrlController {
    public async shorten( req: Request, res: Response ): Promise<void> {
        //verificar se já existe
        const { originURL } = req.body;
        //vendo se já existe no banco
        const url = await URLModel.findOne({ originURL })
        if (url) {
            res.json(url)
            return
        }

        //criar hash pra url
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`

        //salvar url no banco
        const newURL = await URLModel.create({ hash, shortURL, originURL })
        //retornar url salva
        res.json(newURL);
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        //pegar hash da url
        const { hash } = req.params;
        //encontrar a url original através do hash
        const url = await URLModel.findOne({ hash });

        //responde com a url ligada ao hash
        if (url) {
			res.redirect(url.originURL)
			return
		}

        //redirecionar pra url original
        res.status(400).json({ error: 'URL not found' })

    }
}