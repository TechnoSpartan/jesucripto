import 'dotenv/config';
import mongoose from 'mongoose';
import evangelioCanonico from './src/evangelio.canonico.js';
import evangelioApocrifo from './src/evangelio.apocrifo.js';
import {formatearVersiculo} from './src/formatear.versiculo.ts';


const {
    MONGO_URI_PROD,
    MONGO_URI,
    MONGO_USER,
    MONGO_PASS,
    MONGO_DB_NAME,
    MONGO_AUTH_SOURCE,
} = process.env;


if (!MONGO_URI || !MONGO_USER || !MONGO_PASS || !MONGO_DB_NAME || !MONGO_AUTH_SOURCE) {
    throw new Error("❌ Variables de entorno no definidas correctamente");
}

const todosLosVersiculos = [...evangelioCanonico, ...evangelioApocrifo];

const versiculoSchema = new mongoose.Schema({
    texto: String,
    textoCompleto: String,
    capitulo: String,
    versiculo: String,
});

const Versiculo = mongoose.model("Versiculo", versiculoSchema);

mongoose.connect(MONGO_URI, {
    user: MONGO_USER,
    pass: MONGO_PASS,
    dbName: MONGO_DB_NAME,
    authSource: MONGO_AUTH_SOURCE,
})
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
