import Usuario from '../database/models/usuario.js';
import { NotFoundError } from '../errors/not-found.error.js';
import { UsuarioRepository } from '../repositories/usuario.repository.js';
import type { InferCreationAttributes } from 'sequelize';

export class UsuarioService {
  private usuarioRepository: UsuarioRepository;
  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }
  async save(usuario: InferCreationAttributes<Usuario>) {
    return this.usuarioRepository.save(usuario);
  }
  async getById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.getById(id);
    if (!usuario) throw new NotFoundError('Usuário não encontrado!');
    return usuario;
  }
  async destroy(id: number) {
    await this.usuarioRepository.destroy(id);
  }
  async update(
    dadosAtualizados: InferCreationAttributes<Usuario>,
    id: number,
  ): Promise<Usuario> {
    const linhasAfetadas = await this.usuarioRepository.update(
      dadosAtualizados,
      id,
    );
    if (linhasAfetadas[0] === 0)
      throw new NotFoundError('Usuário não encontrado!');
    return this.getById(id);
  }
}
