import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Paciente = sequelize.define('01_pacientes', {

  id_paciente: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  domicilio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  poblacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  provincia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  indexes: [{ unique: true, fields: ['email', 'dni'] }],
  timestamps: true, // Activa la creación automática de createdAt y updatedAt
  createdAt: 'created_at',
  updatedAt: 'updated_at'
  
});

export default Paciente;