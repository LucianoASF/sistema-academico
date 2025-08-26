import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  type ForeignKey,
} from 'sequelize';
import db from './index.js';
import DisciplinaRealizada from './disciplinaRealizada.js';
import Presenca from './presenca.js';

class Aula extends Model<InferAttributes<Aula>, InferCreationAttributes<Aula>> {
  declare id: CreationOptional<number>;
  declare descricao: string;

  // FK
  declare disciplinaRealizadaId: ForeignKey<DisciplinaRealizada['id']>;
}

Aula.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    descricao: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    disciplinaRealizadaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'usuarios', key: 'id' },
    },
  },
  {
    sequelize: db,
    modelName: 'Aula',
    tableName: 'aulas',
    timestamps: false,
    underscored: true,
  },
);

// Associação
Aula.belongsTo(DisciplinaRealizada, { foreignKey: 'disciplinaRealizadaId' });
Aula.hasMany(Presenca, { foreignKey: 'aulaId' });

export default Aula;
