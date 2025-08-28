import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller.js';
import { celebrate, Segments } from 'celebrate';
import { novoUsuarioSchema } from '../database/models/usuario.js';
import asyncHandler from 'express-async-handler';

export const usuarioRoutes = Router();

usuarioRoutes.post(
  '/usuarios',
  celebrate({ [Segments.BODY]: novoUsuarioSchema }),
  asyncHandler(UsuarioController.save),
);
usuarioRoutes.get('/usuarios/:id', asyncHandler(UsuarioController.getById));
