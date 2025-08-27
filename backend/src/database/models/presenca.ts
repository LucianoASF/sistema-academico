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
import Aula from './aula.js';

class Presenca extends Model<
  InferAttributes<Presenca>,
  InferCreationAttributes<Presenca>
> {
  static associate(models: any) {
    Presenca.belongsTo(Matricula, { foreignKey: 'matriculaId' });
    Presenca.belongsTo(Aula, { foreignKey: 'aulaId' });
  }
  declare id: CreationOptional<number>;
  declare presente: boolean;

  // FK
  declare matriculaId: ForeignKey<Matricula['id']>;
  declare aulaId: ForeignKey<Aula['id']>;
}

Presenca.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    presente: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    matriculaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'matriculas', key: 'id' },
    },
    aulaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'aulas', key: 'id' },
    },
  },
  {
    sequelize: db,
    modelName: 'Presenca',
    tableName: 'presencas',
    timestamps: false,
    underscored: true,
  },
);

export default Presenca;
