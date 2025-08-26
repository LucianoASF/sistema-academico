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
import Disciplina from './disciplina.js';
import GradeDisciplina from './gradeDisciplina.js';

class Grade extends Model<
  InferAttributes<Grade>,
  InferCreationAttributes<Grade>
> {
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

// Associação
Grade.belongsTo(Curso, { foreignKey: 'cursoId' });
Grade.belongsToMany(Disciplina, {
  through: GradeDisciplina,
  foreignKey: 'disciplinaId',
});

export default Grade;
