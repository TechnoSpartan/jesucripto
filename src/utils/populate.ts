import mongoose from 'mongoose';
import evangelioCanonico from './evangelio.canonico';
import evangelioApocrifo from './evangelio.apocrifo';
import {formatearVersiculo} from './formatear.versiculo';
import { mongoConfig } from './mongo.config';
import 'dotenv/config';

const todosLosVersiculos = [...evangelioCanonico, ...evangelioApocrifo];

const versiculoSchema = new mongoose.Schema({
    texto: String,
    textoCompleto: String,
    capitulo: String,
    versiculo: String,
});

const Versiculo = mongoose.model("Versiculo", versiculoSchema);

const { uri} = mongoConfig();

mongoose.connect(uri)
    .then(async () => {
        console.log("📡 Conectado a la base de datos de San Pedro");
        const versiculosFormateados = todosLosVersiculos.map(literal => formatearVersiculo(literal));

        const resultado = await Versiculo.insertMany(versiculosFormateados, { ordered: false });
        console.log(`📜 Insertados ${resultado.length} versículos las escrituras de MongoDB.`);
        await mongoose.disconnect();
    })
    .catch((err) => {
        console.error("⚠️ Error en la evangelización digital:", err);
        mongoose.disconnect();
    });
