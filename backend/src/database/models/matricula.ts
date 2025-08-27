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
import Presenca from './presenca.js';

class Matricula extends Model<
  InferAttributes<Matricula>,
  InferCreationAttributes<Matricula>
> {
  static associate(models: any) {
    Matricula.belongsTo(DisciplinaRealizada, {
      foreignKey: 'disciplinaRealizadaId',
    });
    Matricula.belongsTo(Usuario, { foreignKey: 'alunoId' });
    Matricula.hasMany(Nota, { foreignKey: 'matriculaId' });
    Matricula.hasMany(Presenca, { foreignKey: 'matriculaId' });
  }
  declare id: CreationOptional<number>;
  declare presencaFinal: number;
  declare notaFinal: number;

  // FK
  declare disciplinaRealizadaId: ForeignKey<DisciplinaRealizada['id']>;
  declare alunoId: ForeignKey<Usuario['id']>;
}

Matricula.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    presencaFinal: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    notaFinal: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    disciplinaRealizadaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'disciplinas_realizadas', key: 'id' },
    },
    alunoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'usuarios', key: 'id' },
    },
  },
  {
    sequelize: db,
    modelName: 'Matricula',
    tableName: 'matriculas',
    timestamps: false,
    underscored: true,
  },
);

export default Matricula;
