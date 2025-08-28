import { InferCreationAttributes } from 'sequelize';
import Curso from '../database/models/curso.js';

export class CursoRepository {
  async save(curso: InferCreationAttributes<Curso>) {
    return await Curso.create(curso);
  }
  async getAll(): Promise<Curso[]> {
    return Curso.findAll();
  }
  async getById(id: number): Promise<Curso | null> {
    return Curso.findByPk(id);
  }
  async destroy(id: number) {
    await Curso.destroy({ where: { id } });
  }
  async update(
    dadosAtualizados: InferCreationAttributes<Curso>,
    id: number,
  ): Promise<[linhasAfetadas: number]> {
    return Curso.update(dadosAtualizados, { where: { id } });
  }
}
