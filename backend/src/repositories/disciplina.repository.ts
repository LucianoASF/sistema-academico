import { InferCreationAttributes } from 'sequelize';
import Disciplina from '../database/models/disciplina.js';

export class DisciplinaRepository {
  async save(
    disciplina: InferCreationAttributes<Disciplina>,
  ): Promise<Disciplina> {
    return await Disciplina.create(disciplina);
  }
  async getAll(): Promise<Disciplina[]> {
    return Disciplina.findAll();
  }
  async getById(id: number): Promise<Disciplina | null> {
    return Disciplina.findByPk(id);
  }
  async destroy(id: number) {
    await Disciplina.destroy({ where: { id } });
  }
}
