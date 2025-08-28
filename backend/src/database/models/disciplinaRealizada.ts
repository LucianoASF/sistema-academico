import {
  DataTypes,
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  type ForeignKey,
} from 'sequelize';
import db from './index.js';
import Disciplina from './disciplina.js';
import Usuario from './usuario.js';

class DisciplinaRealizada extends Model<
  InferAttributes<DisciplinaRealizada>,
  InferCreationAttributes<DisciplinaRealizada>
> {
  static associate(models: any) {
    DisciplinaRealizada.belongsTo(models.Disciplina, {
      foreignKey: 'disciplinaId',
    });
    DisciplinaRealizada.belongsTo(models.Usuario, {
      foreignKey: 'professorId',
    });
    DisciplinaRealizada.hasMany(models.Aula, {
      foreignKey: 'disciplinaRealizadaId',
    });
    DisciplinaRealizada.hasMany(models.Matricula, {
      foreignKey: 'disciplinaRealizadaId',
    });
    DisciplinaRealizada.hasMany(models.Avaliacao, {
      foreignKey: 'disciplinaRealizadaId',
    });
  }
  declare id: CreationOptional<number>;

  // FK
  declare disciplinaId: ForeignKey<Disciplina['id']>;
  declare professorId: ForeignKey<Usuario['id']>;
}

DisciplinaRealizada.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    disciplinaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'disciplinas', key: 'id' },
    },
    professorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'usuarios', key: 'id' },
    },
  },
  {
    sequelize: db,
    modelName: 'DisciplinaRealizada',
    tableName: 'disciplinas_realizadas',
    timestamps: false,
    underscored: true,
  },
);

export default DisciplinaRealizada;
