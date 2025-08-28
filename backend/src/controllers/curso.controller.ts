import type { Request, Response } from 'express';
import { CursoService } from '../services/curso.service.js';

export class UsuarioController {
  static async save(req: Request, res: Response) {
    res.status(201).json(await new CursoService().save(req.body));
  }
  static async getAll(req: Request, res: Response) {
    res.status(200).json(await new CursoService().getAll());
  }
  static async getById(req: Request, res: Response) {
    res
      .status(200)
      .json(await new CursoService().getById(Number(req.params.id)));
  }
  static async destroy(req: Request, res: Response) {
    await new CursoService().destroy(Number(req.params.id));
    res.status(204).end();
  }
  static async update(req: Request, res: Response) {
    res
      .status(200)
      .json(await new CursoService().update(req.body, Number(req.params.id)));
  }
}
