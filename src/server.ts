import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import cors            from "cors";
import versiculoRoutes from '@routes/versiculos.routes';
import indexGeneralRoutes from '@routes/index_geneneral.routes';
import { mongoConfig }    from '@utils/mongo.config';


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", versiculoRoutes);
app.use("/api", indexGeneralRoutes);

const { uri } = mongoConfig();

mongoose.connect(uri, {
})
    .then(() => {
        console.log("✅ Conectado a la base de datos celestial");
        app.listen(3000, () => {
            console.log("✝️ Jesucripto API escuchando en el puerto 3000");
        });
    })
    .catch(err => console.error("😱 Error conectando a Mongo:", err));
