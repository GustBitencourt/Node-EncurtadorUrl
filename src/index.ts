import express from 'express';
import { UrlController } from './controller/url.controller';
import { MongoConnection } from './database/MongoConnection'

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new UrlController()
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect)

//escutando o funcionando do express
api.listen(5000, () => console.log('Express Ouvindo!!'));