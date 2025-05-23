import type { Router } from 'express';
import express from "express";
import { versiculoAllController, versiculoController } from '@controller/versiculo.controller';

const router: Router = express.Router();

// GET /api/versiculo - Versículo aleatorio
router.get( '/versiculo',
    versiculoController );

// GET /api/todos - Todos los versiculos
router.get("/todos", versiculoAllController);

export default router;
