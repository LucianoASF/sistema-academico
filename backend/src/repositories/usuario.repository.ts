import { InferCreationAttributes } from 'sequelize';
import Usuario from '../database/models/usuario.js';

export class UsuarioRepository {
  async save(usuario: InferCreationAttributes<Usuario>) {
    return await Usuario.create(usuario);
  }
  async getById(id: number): Promise<Usuario | null> {
    return await Usuario.findByPk(id);
  }
  async destroy(id: number) {
    await Usuario.destroy({ where: { id } });
  }
  async update(
    dadosAtualizados: InferCreationAttributes<Usuario>,
    id: number,
  ): Promise<[linhasAfetadas: number]> {
    return Usuario.update(dadosAtualizados, { where: { id } });
  }
}
