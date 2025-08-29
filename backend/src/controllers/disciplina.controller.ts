import type { Request, Response } from 'express';
import { DisciplinaService } from '../services/disciplina.service.js';

export class DisciplinaController {
  static async save(req: Request, res: Response) {
    res.status(201).json(await new DisciplinaService().save(req.body));
  }
  static async getAll(req: Request, res: Response) {
    res.status(200).json(await new DisciplinaService().getAll());
  }
  static async getById(req: Request, res: Response) {
    res
      .status(200)
      .json(await new DisciplinaService().getById(Number(req.params.id)));
  }
  static async destroy(req: Request, res: Response) {
    await new DisciplinaService().destroy(Number(req.params.id));
    res.status(204).end();
  }
}
