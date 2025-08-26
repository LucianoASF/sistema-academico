import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
} from 'sequelize';
import db from './index.js';
import DisciplinaRealizada from './disciplinaRealizada.js';
import Grade from './grade.js';
import GradeDisciplina from './gradeDisciplina.js';

class Disciplina extends Model<
  InferAttributes<Disciplina>,
  InferCreationAttributes<Disciplina>
> {
  declare id: CreationOptional<number>;
  declare nome: string;
  declare quantidadeAulas: string;
}

Disciplina.init(
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
    quantidadeAulas: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: 'Disciplina',
    tableName: 'disciplinas',
    timestamps: false,
    underscored: true,
  },
);

Disciplina.hasMany(DisciplinaRealizada, {
  foreignKey: 'disciplinaId',
});
Disciplina.belongsToMany(Grade, {
  through: GradeDisciplina,
  foreignKey: 'disciplinaId',
});

export default Disciplina;
