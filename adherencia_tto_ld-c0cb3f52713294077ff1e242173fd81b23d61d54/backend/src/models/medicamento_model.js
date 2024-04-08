import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Medicamento = sequelize.define('02_medicamentos', {

  id_medicamento: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  num_registro: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  laboratorio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  triangulo_seguim: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  inicio_envase: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  contenido_envase: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  forma_simple: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  via_administracion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prospecto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  consejos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  indexes: [{ unique: true, fields: ['num_registro'] }],
  timestamps: false, // Activa la creación automática de createdAt y updatedAt
  //updatedAt: 'updated_at',
  //createdAt: 'created_at'
});

export default Medicamento;