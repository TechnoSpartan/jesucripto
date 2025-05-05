import mongoose from 'mongoose';
import evangelioCanonico from './evangelio.canonico';
import evangelioApocrifo from './evangelio.apocrifo';
import evangelioHereje from './evangelio.hereje';
import {formatearVersiculo} from './formatear.versiculo';
import { mongoConfig } from './mongo.config';
import 'dotenv/config';

const todosLosVersiculos = [...evangelioCanonico, ...evangelioApocrifo, ...evangelioHereje];

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

            const operaciones = versiculosFormateados.map((versiculo) => ({
                updateOne: {
                    filter: { texto: versiculo.texto }, // puedes cambiar esto si quieres una clave distinta
                    update: { $set: versiculo },
                    upsert: true
                }
            }));

            const resultado = await Versiculo.bulkWrite(operaciones, { ordered: false });
            console.log(`📜 Upsert completado: ${resultado.upsertedCount} insertados, ${resultado.modifiedCount} actualizados.`);

            await mongoose.disconnect();
        })
        .catch((err) => {
            console.error("⚠️ Error en la evangelización digital:", err);
            mongoose.disconnect();
        });
