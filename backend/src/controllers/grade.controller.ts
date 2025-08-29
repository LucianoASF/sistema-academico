import type { Request, Response } from 'express';
import { GradeService } from '../services/grade.service.js';

export class GradeController {
  static async save(req: Request, res: Response) {
    res.status(201).json(await new GradeService().save(req.body));
  }
  static async getById(req: Request, res: Response) {
    res
      .status(200)
      .json(await new GradeService().getById(Number(req.params.id)));
  }
  static async destroy(req: Request, res: Response) {
    await new GradeService().destroy(Number(req.params.id));
    res.status(204).end();
  }
}
