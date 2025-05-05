import { Request, Response }     from 'express';
import Versiculo from '@models/versiculo';

export const versiculoController =  async (req: Request, res: Response): Promise<void> => {
    const total = await Versiculo.countDocuments();
    const random = Math.floor(Math.random() * total);
    const versiculo = await Versiculo.findOne().skip(random);
    return void res.json({ data: versiculo });
}

export const versiculoAllController =  async (req: Request, res: Response): Promise<void> => {
    const versiculos = await Versiculo.find().sort({ fecha: -1 });
    return void res.json({ data: versiculos });
}