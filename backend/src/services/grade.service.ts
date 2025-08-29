import Grade from '../database/models/grade.js';
import { NotFoundError } from '../errors/not-found.error.js';
import { GradeRepository } from '../repositories/grade.repository.js';
import type { InferCreationAttributes } from 'sequelize';

export class GradeService {
  private gradeRepository: GradeRepository;
  constructor() {
    this.gradeRepository = new GradeRepository();
  }
  async save(grade: InferCreationAttributes<Grade>) {
    return this.gradeRepository.save(grade);
  }
  async getById(id: number): Promise<Grade> {
    const grade = await this.gradeRepository.getById(id);
    if (!grade) throw new NotFoundError('Grade não encontrada!');
    return grade;
  }
  async destroy(id: number) {
    await this.gradeRepository.destroy(id);
  }
}
