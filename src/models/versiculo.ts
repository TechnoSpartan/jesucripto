import mongoose, { Schema, Document, model } from "mongoose";

const { models } = mongoose;


export interface IVersiculo extends Document {
    texto: string;
    libro: string;
    capitulo: number;
    versiculo: number;
    fecha: string;
}

const versiculoSchema = new Schema<IVersiculo>({
    texto: { type: String, required: true },
    libro: { type: String, required: true },
    capitulo: { type: Number, required: true },
    versiculo: { type: Number, required: true },
    fecha: { type: String, required: true },
});

const Versiculo = models.Versiculo || model<IVersiculo>("Versiculo", versiculoSchema);
export default Versiculo;
