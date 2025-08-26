import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
} from 'sequelize';
import db from './index.js';
import DisciplinaRealizada from './disciplinaRealizada.js';
import Matricula from './matricula.js';

class Usuario extends Model<
  InferAttributes<Usuario>,
  InferCreationAttributes<Usuario>
> {
  declare id: CreationOptional<number>;
  declare nome: string;
  declare email: string;
  declare senha: string;
  declare role: string;
}

Usuario.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100),
    },
    senha: {
      allowNull: false,
      type: DataTypes.STRING(60),
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING(25),
    },
  },
  {
    sequelize: db,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false,
  },
);
Usuario.hasMany(DisciplinaRealizada, {
  foreignKey: 'professorId',
});
DisciplinaRealizada.hasMany(Matricula, { foreignKey: 'alunoId' });

export default Usuario;
