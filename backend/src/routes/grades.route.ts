import { Router } from 'express';
import { GradeController } from '../controllers/grade.controller.js';
import { celebrate, Segments } from 'celebrate';
import asyncHandler from 'express-async-handler';
import { gradeSchema } from '../database/models/grade.js';

export const gradeRoutes = Router();

gradeRoutes.post(
  '/grades',
  celebrate({ [Segments.BODY]: gradeSchema }),
  asyncHandler(GradeController.save),
);
gradeRoutes.get('/grades/:id', asyncHandler(GradeController.getById));
gradeRoutes.delete('/grades/:id', asyncHandler(GradeController.destroy));
