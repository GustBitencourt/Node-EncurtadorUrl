import express from 'express';
import { UrlController } from './controller/url.controller';

const api = express();
api.use(express.json());

const urlController = new UrlController()
api.post('/shorten', urlController.shorten);

//escutando o funcionando do express
api.listen(5000, () => console.log('Express Ouvindo!!'));