import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  type ForeignKey,
} from 'sequelize';
import db from './index.js';
import Curso from './curso.js';
import { Joi } from 'celebrate';

class Grade extends Model<
  InferAttributes<Grade>,
  InferCreationAttributes<Grade>
> {
  static associate(models: any) {
    Grade.belongsTo(models.Curso, { foreignKey: 'cursoId' });
    Grade.belongsToMany(models.Disciplina, {
      through: models.GradeDisciplina,
      foreignKey: 'disciplinaId',
    });
  }
  declare id: CreationOptional<number>;
  declare versao: number;

  // FK
  declare cursoId: ForeignKey<Curso['id']>;
}

Grade.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    versao: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    cursoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'cursos', key: 'id' },
    },
  },
  {
    sequelize: db,
    modelName: 'Grade',
    tableName: 'grades',
    timestamps: false,
    underscored: true,
  },
);

export default Grade;

export const gradeSchema = Joi.object().keys({
  versao: Joi.number().required(),
  cursoId: Joi.number().required(),
});
