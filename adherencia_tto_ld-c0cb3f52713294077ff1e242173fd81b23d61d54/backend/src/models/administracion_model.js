import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Medicamento from './medicamento_model.js';
import Paciente from './paciente_model.js';


const Administracion = sequelize.define('03_administraciones', {

  id_administracion: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  medicamento_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  paciente_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  dosis: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  frecuencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ayunas: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  desayuno: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  media_manyana: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  pre_comida: {
  type: DataTypes.TIME,
  allowNull: true,
  },
  comida: {
  type: DataTypes.TIME,
  allowNull: true,
  },
  post_comida: {
  type: DataTypes.TIME,
  allowNull: true,
  },
  media_tarde: {
  type: DataTypes.TIME,
  allowNull: true,
  },
  merienda: {
  type: DataTypes.TIME,
  allowNull: true,
  },
  pre_cena: {
  type: DataTypes.TIME,
  allowNull: true,
  },
  cena: {
  type: DataTypes.TIME,
  allowNull: true,
  },
  post_cena: {
  type: DataTypes.TIME,
  allowNull: true,
  },
  acostarse: {
  type: DataTypes.TIME,
  allowNull: true,
  },
},{
  //indexes: [{ unique: true, fields: ['email', 'dni'] }],
  timestamps: false, // Activa la creación automática de createdAt y updatedAt
  //updatedAt: 'updated_at',
  //createdAt: 'created_at'
});

Medicamento.hasMany(Administracion, { foreignKey: 'medicamento_id' });
Administracion.belongsTo(Medicamento, { foreignKey: 'medicamento_id' });

Paciente.hasMany(Administracion, { foreignKey: 'paciente_id' });
Administracion.belongsTo(Paciente, { foreignKey: 'paciente_id' });

//Ten en cuenta que hasMany solo establece la relación desde el modelo principal hacia el secundario.
//En algunos casos, eso puede ser suficiente si no necesitas navegar desde el secundario hacia el principal.
//Sin embargo, si necesitas la relación inversa(por ejemplo, obtener el usuario al que pertenece un libro), entonces necesitarás belongsTo.


export default Administracion;