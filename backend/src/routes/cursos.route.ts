import { Router } from 'express';
import { DisciplinaController } from '../controllers/curso.controller.js';
import { celebrate, Segments } from 'celebrate';
import asyncHandler from 'express-async-handler';
import { cursoSchema } from '../database/models/curso.js';

export const cursoRoutes = Router();

cursoRoutes.post(
  '/cursos',
  celebrate({ [Segments.BODY]: cursoSchema }),
  asyncHandler(DisciplinaController.save),
);
cursoRoutes.get('/cursos', asyncHandler(DisciplinaController.getAll));
cursoRoutes.get('/cursos/:id', asyncHandler(DisciplinaController.getById));
cursoRoutes.delete('/cursos/:id', asyncHandler(DisciplinaController.destroy));
cursoRoutes.put(
  '/cursos/:id',
  celebrate({ [Segments.BODY]: cursoSchema }),
  asyncHandler(DisciplinaController.update),
);
