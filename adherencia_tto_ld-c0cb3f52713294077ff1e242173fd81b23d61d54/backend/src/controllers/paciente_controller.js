import Paciente from '../models/paciente_model.js';
import { validationResult } from 'express-validator';

export const getPacientes = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Obtener todos los usuarios de la base de datos
    const pacientes = await Paciente.findAll();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Pacientes List',
      data: pacientes
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener los pacientes',
    });
  }
};

export const getPacienteById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un usuario por su ID en la base de datos
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({
        code: -6,
        message: 'Paciente no encontrado'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Paciente Detail',
      data: paciente
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener el paciente'
    });
  }
};

export const addPaciente = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { body } = req;
    let newPaciente;
    try {
      newPaciente = await Paciente.create({ body });
    } catch (error) {
      // Si hay un error de duplicación de clave única (por ejemplo, título duplicado)
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          code: -61,
          message: 'El paciente ya existe'
        });
      }
    }

    if (!newPaciente) {
      return res.status(404).json({
        code: -6,
        message: 'Error al añadir un paciente'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Paciente añadido correctamente',
      data: newPaciente
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al añadir el paciente'
    });
  }
};

export const updatePaciente = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { body } = req;

    // Buscar un usuario por su ID en la base de datos
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({
        code: -3,
        message: 'Paciente no encontrado'
      });
    }

    // Actualizar los datos del paciente
    await paciente.update(body);

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'El paciente se ha actualizado',
      data: paciente
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar el paciente'
    });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un paciente por su ID en la base de datos y eliminarlo
    const deletedPaciente = await Paciente.destroy({ where: { id_paciente: id } });

    // Verificar si el paciente fue encontrado y eliminado
    if (!deletedPaciente) {
      return res.status(404).json({
        code: -100,
        message: 'Paciente no encontrado'
      });
     }
 
    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'El paciente se ha eliminado'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al eliminar el paciente'
    });
  }
};