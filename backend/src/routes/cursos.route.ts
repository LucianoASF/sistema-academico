import { Router } from 'express';
import { UsuarioController } from '../controllers/curso.controller.js';
import { celebrate, Segments } from 'celebrate';
import asyncHandler from 'express-async-handler';
import { cursoSchema } from '../database/models/curso.js';

export const cursoRoutes = Router();

cursoRoutes.post(
  '/cursos',
  celebrate({ [Segments.BODY]: cursoSchema }),
  asyncHandler(UsuarioController.save),
);
cursoRoutes.get('/cursos', asyncHandler(UsuarioController.getAll));
cursoRoutes.get('/cursos/:id', asyncHandler(UsuarioController.getById));
cursoRoutes.delete('/cursos/:id', asyncHandler(UsuarioController.destroy));
cursoRoutes.put(
  '/cursos/:id',
  celebrate({ [Segments.BODY]: cursoSchema }),
  asyncHandler(UsuarioController.update),
);
