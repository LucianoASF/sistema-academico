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
}
