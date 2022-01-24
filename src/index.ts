import express, { Request, Response } from 'express';

const api = express();

api.use('/test', (req: Request, res: Response) => {
    res.json({ sucess: true });

})

api.listen(5000, () => console.log('Tô Ouvindo!!'));