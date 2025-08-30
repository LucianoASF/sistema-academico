import { errors } from 'celebrate';
import type { Express, NextFunction, Request, Response } from 'express';
import { ErrorBase } from '../errors/base.error.js';
import { ForeignKeyConstraintError } from 'sequelize';
import { InternalServerError } from '../errors/internal-server.error.js';

export const erroHandler = (app: Express) => {
  app.use(errors());
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ForeignKeyConstraintError) {
      return res.status(400).json({
        erro: 'Não foi possível salvar porque a referência fornecida não existe.',
      });
    }
    if (error instanceof ErrorBase) {
      error.send(res);
    } else {
      new InternalServerError().send(res);
    }
  });
};
