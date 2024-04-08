import Medicamento from '../models/medicamento_model.js'
import { validationResult } from 'express-validator';

export const getMedicamentos = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Obtener todos los medicamentos de la base de datos
    const medicamentos = await Medicamento.findAll();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Medicamentos List',
      data: medicamentos
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener los medicamentos',
    });
  }
};

export const getMedicamentoById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un usuario por su ID en la base de datos
    const medicamento = await Medicamento.findByPk(id);
    if (!medicamento) {
      return res.status(404).json({
        code: -6,
        message: 'Medicamento no encontrado'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Medicamento Detail',
      data: medicamento
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener el medicamento'
    });
  }
};

export const addMedicamento = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { body } = req;
    let newMedicamento;
    try {
      newMedicamento = await Medicamento.create({ body });
    } catch (error) {
      // Si hay un error de duplicación de clave única (por ejemplo, título duplicado)
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          code: -61,
          message: 'El medicamento ya existe'
        });
      }
    }

    if (!newMedicamento) {
      return res.status(404).json({
        code: -6,
        message: 'Error al añadir un medicamento'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Medicamento añadido correctamente',
      data: newMedicamento
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al añadir el medicamento'
    });
  }
};

export const updateMedicamento = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { body } = req;

    // Buscar un usuario por su ID en la base de datos
    const medicamento = await Medicamento.findByPk(id);
    if (!medicamento) {
      return res.status(404).json({
        code: -3,
        message: 'Medicamento no encontrado'
      });
    }

    // Actualizar los datos del medicamento
    await medicamento.update(body);

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'El medicamento se ha actualizado',
      data: medicamento
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar el medicamento'
    });
  }
};

export const deleteMedicamento = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un medicamento por su ID en la base de datos y eliminarlo
    const deletedMedicamento = await Medicamento.destroy({ where: { id_medicamento: id } });

    // Verificar si el medicamento fue encontrado y eliminado
    if (!deletedMedicamento) {
      return res.status(404).json({
        code: -100,
        message: 'Medicamento no encontrado'
      });
     }
 
    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'El medicamento se ha eliminado'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al eliminar el medicamento'
    });
  }
};