import type { Router } from 'express';
import express from "express";
import { indexGeneralController } from '@controller/index_general.controller';

const router: Router = express.Router();

/**
 * Carga un libro específico desde su archivo
 * GET /api/libro/:book
 */
router.get("/libro/:book", indexGeneralController);

export default router;