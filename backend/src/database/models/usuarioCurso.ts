import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type ForeignKey,
} from 'sequelize';
import db from './index.js';
import type Disciplina from './disciplina.js';
import type Grade from './grade.js';
import Usuario from './usuario.js';
import Curso from './curso.js';

class UsuarioCurso extends Model<
  InferAttributes<UsuarioCurso>,
  InferCreationAttributes<UsuarioCurso>
> {
  // FK
  declare alunoId: ForeignKey<Usuario['id']>;
  declare cursoId: ForeignKey<Curso['id']>;
}

UsuarioCurso.init(
  {
    alunoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'usuarios', key: 'id' },
    },
    cursoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'cursos', key: 'id' },
    },
  },
  {
    sequelize: db,
    modelName: 'UsuarioCurso',
    tableName: 'usuario_cursos',
    timestamps: false,
    underscored: true,
  },
);

export default UsuarioCurso;
