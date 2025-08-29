import { InferCreationAttributes } from 'sequelize';
import Grade from '../database/models/grade.js';

export class GradeRepository {
  async save(grade: InferCreationAttributes<Grade>): Promise<Grade> {
    return await Grade.create(grade);
  }
  async getById(id: number): Promise<Grade | null> {
    return Grade.findByPk(id);
  }
  async destroy(id: number) {
    await Grade.destroy({ where: { id } });
  }
}
