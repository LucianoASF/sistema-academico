import Curso from '../database/models/curso.js';
import { NotFoundError } from '../errors/not-found.error.js';
import { CursoRepository } from '../repositories/curso.repository.js';
import type { InferCreationAttributes } from 'sequelize';

export class CursoService {
  private cursoRepository: CursoRepository;
  constructor() {
    this.cursoRepository = new CursoRepository();
  }
  async save(curso: InferCreationAttributes<Curso>) {
    return this.cursoRepository.save(curso);
  }
  async getAll(): Promise<Curso[]> {
    return this.cursoRepository.getAll();
  }
  async getById(id: number): Promise<Curso> {
    const curso = await this.cursoRepository.getById(id);
    if (!curso) throw new NotFoundError('Curso não encontrado!');
    return curso;
  }
  async destroy(id: number) {
    await this.cursoRepository.destroy(id);
  }
  async update(
    dadosAtualizados: InferCreationAttributes<Curso>,
    id: number,
  ): Promise<Curso> {
    const linhasAfetadas = await this.cursoRepository.update(
      dadosAtualizados,
      id,
    );
    if (linhasAfetadas[0] === 0)
      throw new NotFoundError('Curso não encontrado!');
    return this.getById(id);
  }
}
