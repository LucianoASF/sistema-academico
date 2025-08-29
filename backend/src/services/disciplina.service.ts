import Disciplina from '../database/models/disciplina.js';
import { NotFoundError } from '../errors/not-found.error.js';
import { DisciplinaRepository } from '../repositories/disciplina.repository.js';
import type { InferCreationAttributes } from 'sequelize';

export class DisciplinaService {
  private disciplinaRepository: DisciplinaRepository;
  constructor() {
    this.disciplinaRepository = new DisciplinaRepository();
  }
  async save(disciplina: InferCreationAttributes<Disciplina>) {
    return this.disciplinaRepository.save(disciplina);
  }
  async getAll(): Promise<Disciplina[]> {
    return this.disciplinaRepository.getAll();
  }
  async getById(id: number): Promise<Disciplina> {
    const disciplina = await this.disciplinaRepository.getById(id);
    if (!disciplina) throw new NotFoundError('Disciplina não encontrada!');
    return disciplina;
  }
  async destroy(id: number) {
    await this.disciplinaRepository.destroy(id);
  }
}
