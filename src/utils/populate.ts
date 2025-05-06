import mongoose from 'mongoose';
import { mongoConfig } from './mongo.config';
import 'dotenv/config';
import evangelio_canonico from '@versiculos/evangelio_canonico';
import evangelio_apocrifo from '@versiculos/evangelio_apocrifo';
import evangelio_hereje from '@versiculos/evangelio_hereje';
import actas_de_rrhh                from '@versiculos/actas_de_rrhh';
import calendario_de_los_condenados from '@versiculos/calendario_de_los_condenados';
import contabilidad_ecologica from '@versiculos/contabilidad_ecologica';
import contradicciones        from '@versiculos/contradicciones';
import cubiculos              from '@versiculos/cubiculos';
import higiene                from '@versiculos/higiene';
import jesuscripto_mega from '@versiculos/jesuscripto_mega';
import productivos            from '@versiculos/productivos';
import proverbios_de_oficina from '@versiculos/proverbios_de_oficina';
import salmos_de_la_incomunicacion from '@versiculos/salmos_de_la_incomunicacion';
import salmos_del_microondas from '@versiculos/salmos_del_microondas';
import repeticiones from '@versiculos/repeticiones';

const todosLosVersiculos = [
    ...evangelio_canonico,
    ...evangelio_apocrifo,
    ...evangelio_hereje,
    ...actas_de_rrhh,
    ...calendario_de_los_condenados,
    ...contabilidad_ecologica,
    ...contradicciones,
    ...cubiculos,
    ...higiene,
    ...jesuscripto_mega,
    ...productivos,
    ...proverbios_de_oficina,
    ...salmos_de_la_incomunicacion,
    ...salmos_del_microondas,
    ...repeticiones
];

const versiculoSchema = new mongoose.Schema({
    texto: { type: String, required: true },
    libro: { type: String, required: true },
    capitulo: { type: Number, required: true },
    versiculo: { type: Number, required: true },
    fecha: { type: String, required: true },
});

const Versiculo = mongoose.model("Versiculo", versiculoSchema);

try {
        const { uri} = mongoConfig();

        await mongoose.connect(uri, {
            dbName: 'jesucriptoDB',
        });
        console.log("📡 Conectado a la base de datos de San Pedro");

        console.log("🧼 Borrando todos los versículos existentes...");
        await Versiculo.deleteMany({});

        console.log("✒️ Insertando nuevos versículos...");
        const resultado = await Versiculo.insertMany(todosLosVersiculos);
        console.log(`✅ Insertados ${resultado.length} versículos nuevos.`);

        await mongoose.disconnect();
        console.log("📴 Desconectado de la base de datos celestial.");
    } catch (err) {
        console.error("⚠️ Error en la evangelización digital:", err);
        await mongoose.disconnect();
}