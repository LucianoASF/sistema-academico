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
import { Joi } from 'celebrate';
import { brasilPhoneRegex } from '../../utils/regex.js';

class Usuario extends Model<
  InferAttributes<Usuario>,
  InferCreationAttributes<Usuario>
> {
  static associate(models: any) {
    Usuario.hasMany(DisciplinaRealizada, {
      foreignKey: 'professorId',
    });
    DisciplinaRealizada.hasMany(Matricula, { foreignKey: 'alunoId' });
  }
  declare id: CreationOptional<number>;
  declare nome: string;
  declare email: string;
  declare telefone: string;
  declare cpf: string;
  declare dataNascimento: Date;
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
    telefone: {
      allowNull: false,
      type: DataTypes.STRING(11),
    },
    cpf: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(11),
    },
    dataNascimento: {
      allowNull: false,
      type: DataTypes.DATE,
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
    underscored: true,
  },
);

export default Usuario;

export const novoUsuarioSchema = Joi.object().keys({
  nome: Joi.string().trim().min(5).max(100).required(),
  email: Joi.string().trim().email().min(5).max(100).required(),
  telefone: Joi.string().trim().regex(brasilPhoneRegex).length(11).required(),
  cpf: Joi.string().trim().length(11).required(),
  dataNascimento: Joi.date().required(),
  senha: Joi.string().trim().min(5).max(60).required(),
  role: Joi.string().trim().required(),
});
