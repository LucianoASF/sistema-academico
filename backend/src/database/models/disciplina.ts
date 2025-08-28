import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
} from 'sequelize';
import db from './index.js';

class Disciplina extends Model<
  InferAttributes<Disciplina>,
  InferCreationAttributes<Disciplina>
> {
  static associate(models: any) {
    Disciplina.hasMany(models.DisciplinaRealizada, {
      foreignKey: 'disciplinaId',
    });
    Disciplina.belongsToMany(models.Grade, {
      through: models.GradeDisciplina,
      foreignKey: 'disciplinaId',
    });
  }
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

export default Disciplina;
