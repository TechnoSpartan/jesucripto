import express from "express";
import Versiculo from "@models/versiculo";

const router = express.Router();

// GET /api/versiculo - Versículo aleatorio
router.get("/versiculo", async (req, res) => {
    const total = await Versiculo.countDocuments();
    const random = Math.floor(Math.random() * total);
    const versiculo = await Versiculo.findOne().skip(random);
    res.json({ versiculo });
});

// GET /api/todos - Todos los versículos
router.get("/todos", async (req, res) => {
    const versiculos = await Versiculo.find().sort({ fecha: -1 });
    res.json({ versiculos });
});

export default router;
