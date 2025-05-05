import { NextFunction, Request, Response } from 'express';
import Versiculo, { IVersiculo }           from '@models/versiculo';

export const indexGeneralController = async (req: Request, resp: Response): Promise<void> => {
    const { book: libro } = req.params;
    const versiculos = await Versiculo.find({libro}).sort({ fecha: -1 });
    if (!versiculos) {
        return void resp.status(404).json({ message: 'No se encontraron versículos para este libro.' });
    }
    return void resp.json({ data: versiculos });
}