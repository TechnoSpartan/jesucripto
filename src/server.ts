import express from "express";
import mongoose from "mongoose";
import cors            from "cors";
import versiculoRoutes from './routes/versiculos';
if (process.env.NODE_ENV !== 'production') {
    const dotenv = import 'dotenv/config';
}
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", versiculoRoutes);

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

mongoose.connect(MONGO_URI, {
    user: MONGO_USER,
    pass: MONGO_PASS,
    dbName: MONGO_DB_NAME,
    authSource: MONGO_AUTH_SOURCE,
})
    .then(() => {
        console.log("✅ Conectado a la base de datos celestial");
        app.listen(3000, () => {
            console.log("✝️ Jesucripto API escuchando en el puerto 3000");
        });
    })
    .catch(err => console.error("😱 Error conectando a Mongo:", err));
