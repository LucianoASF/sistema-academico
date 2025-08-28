import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
} from 'sequelize';
import db from './index.js';
import { Joi } from 'celebrate';

class Curso extends Model<
  InferAttributes<Curso>,
  InferCreationAttributes<Curso>
> {
  static associate(models: any) {
    Curso.hasMany(models.Grade, { foreignKey: 'cursoId' });
    Curso.belongsToMany(models.Usuario, {
      through: models.UsuarioCurso,
      foreignKey: 'aluno_id',
    });
  }
  declare id: CreationOptional<number>;
  declare nome: string;
}

Curso.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING(45),
    },
  },
  {
    sequelize: db,
    modelName: 'Curso',
    tableName: 'cursos',
    timestamps: false,
  },
);

export default Curso;

export const cursoSchema = Joi.object().keys({
  nome: Joi.string().trim().min(10).max(45).required(),
});
