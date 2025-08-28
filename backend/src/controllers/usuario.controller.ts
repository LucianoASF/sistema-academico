import type { Request, Response } from 'express';
import { UsuarioService } from '../services/usuario.service.js';

export class UsuarioController {
  static async save(req: Request, res: Response) {
    res.status(201).json(await new UsuarioService().save(req.body));
  }
  static async getById(req: Request, res: Response) {
    res
      .status(200)
      .json(await new UsuarioService().getById(Number(req.params.id)));
  }
}
