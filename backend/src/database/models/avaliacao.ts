import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  type ForeignKey,
} from 'sequelize';
import db from './index.js';
import Usuario from './usuario.js';
import DisciplinaRealizada from './disciplinaRealizada.js';
import Nota from './nota.js';

class Avaliacao extends Model<
  InferAttributes<Avaliacao>,
  InferCreationAttributes<Avaliacao>
> {
  static associate(models: any) {
    Avaliacao.belongsTo(DisciplinaRealizada, {
      foreignKey: 'disciplinaRealizadaId',
    });
    Avaliacao.hasMany(Nota, { foreignKey: 'avaliacaoId' });
  }

  declare id: CreationOptional<number>;
  declare nome: string;
  declare valor: number;

  // FK
  declare disciplinaRealizadaId: ForeignKey<DisciplinaRealizada['id']>;
  declare alunoId: ForeignKey<Usuario['id']>;
}

Avaliacao.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: true,
      type: DataTypes.STRING(60),
    },
    valor: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    disciplinaRealizadaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'disciplinas_realizadas', key: 'id' },
    },
  },
  {
    sequelize: db,
    modelName: 'Avaliacao',
    tableName: 'avaliacoes',
    timestamps: false,
    underscored: true,
  },
);

export default Avaliacao;
