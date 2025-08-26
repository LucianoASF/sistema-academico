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

class GradeDisciplina extends Model<
  InferAttributes<GradeDisciplina>,
  InferCreationAttributes<GradeDisciplina>
> {
  // FK
  declare gradeId: ForeignKey<Grade['id']>;
  declare disciplinaId: ForeignKey<Disciplina['id']>;
}

GradeDisciplina.init(
  {
    gradeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'grades', key: 'id' },
    },
    disciplinaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'disciplinas', key: 'id' },
    },
  },
  {
    sequelize: db,
    modelName: 'GradeDisciplina',
    tableName: 'grade_disciplinas',
    timestamps: false,
    underscored: true,
  },
);

export default GradeDisciplina;
