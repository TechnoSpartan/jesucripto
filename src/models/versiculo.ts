import mongoose, { Schema, Document, model } from "mongoose";

const { models } = mongoose;


export interface IVersiculo extends Document {
    texto: string;
    textoCompleto: string;
    capitulo: string;
    versiculo: string;
}

const versiculoSchema = new Schema<IVersiculo>({
    texto: { type: String, required: true },
    textoCompleto: { type: String, required: true },
    capitulo: { type: String, required: true },
    versiculo: { type: String, required: true },
});

const Versiculo = models.Versiculo || model<IVersiculo>("Versiculo", versiculoSchema);
export default Versiculo;
