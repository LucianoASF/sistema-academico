import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  type ForeignKey,
} from 'sequelize';
import db from './index.js';
import Matricula from './matricula.js';
import Avaliacao from './avaliacao.js';

class Nota extends Model<InferAttributes<Nota>, InferCreationAttributes<Nota>> {
  static associate(models: any) {
    Nota.belongsTo(models.Matricula, { foreignKey: 'matriculaId' });
    Nota.belongsTo(models.Avaliacao, { foreignKey: 'avaliacaoId' });
  }
  declare id: CreationOptional<number>;
  declare valorObtido: number;

  // FK
  declare matriculaId: ForeignKey<Matricula['id']>;
  declare avaliacaoId: ForeignKey<Avaliacao['id']>;
}

Nota.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    valorObtido: {
      allowNull: true,
      type: DataTypes.DECIMAL(4, 2),
    },
    matriculaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'matriculas', key: 'id' },
    },
    avaliacaoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'avaliacoes', key: 'id' },
    },
  },
  {
    sequelize: db,
    modelName: 'Nota',
    tableName: 'notas',
    timestamps: false,
    underscored: true,
  },
);

export default Nota;
