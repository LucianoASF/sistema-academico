import { Router } from 'express';
import { DisciplinaController } from '../controllers/disciplina.controller.js';
import { celebrate, Segments } from 'celebrate';
import asyncHandler from 'express-async-handler';
import { disciplinaSchema } from '../database/models/disciplina.js';

export const disciplinaRoutes = Router();

disciplinaRoutes.post(
  '/disciplinas',
  celebrate({ [Segments.BODY]: disciplinaSchema }),
  asyncHandler(DisciplinaController.save),
);
disciplinaRoutes.get('/disciplinas', asyncHandler(DisciplinaController.getAll));
disciplinaRoutes.get(
  '/disciplinas/:id',
  asyncHandler(DisciplinaController.getById),
);
disciplinaRoutes.delete(
  '/disciplinas/:id',
  asyncHandler(DisciplinaController.destroy),
);
