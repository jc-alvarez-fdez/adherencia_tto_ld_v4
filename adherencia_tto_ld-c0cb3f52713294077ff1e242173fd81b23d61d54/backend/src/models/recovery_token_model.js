import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Paciente from './paciente_model.js';

const RecoveryToken = sequelize.define('RecoveryToken', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  paciente_id: {
    type: DataTypes.INTEGER(3).UNSIGNED,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  timestamps: false
});
Paciente.hasMany(RecoveryToken, { foreignKey: 'paciente_id' });
RecoveryToken.belongsTo(Paciente, { foreignKey: 'paciente_id' });

export default RecoveryToken;


