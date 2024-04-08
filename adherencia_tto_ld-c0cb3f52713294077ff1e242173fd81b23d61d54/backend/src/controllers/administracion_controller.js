import Administracion from './../models/administracion_model.js';
import { validationResult } from 'express-validator';

export const getAdministraciones = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Obtener todas las administraciones de la base de datos
    const administraciones = await Administracion.findAll();

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Administraciones List',
      data: administraciones
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener las administraciones',
    });
  }
};

export const getAdministracionById = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un usuario por su ID en la base de datos
    const administracion = await Administracion.findByPk(id);
    if (!administracion) {
      return res.status(404).json({
        code: -6,
        message: 'Administracion no encontrada'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Administracion Detail',
      data: administracion
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al obtener la administracion'
    });
  }
};

export const addAdministracion = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { body } = req;
    let newAdministracion;
    try {
      newAdministracion = await Administracion.create({ body });
    } catch (error) {
      // Si hay un error de duplicación de clave única (por ejemplo, título duplicado)
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({
          code: -61,
          message: 'El administracion ya existe'
        });
      }
    }

    if (!newAdministracion) {
      return res.status(404).json({
        code: -6,
        message: 'Error al añadir una administracion'
      });
    }

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'Administracion añadida correctamente',
      data: newAdministracion
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al añadir la administracion'
    });
  }
};

export const updateAdministracion = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { body } = req;

    // Buscar una administración por su ID en la base de datos
    const administracion = await Administracion.findByPk(id);
    if (!administracion) {
      return res.status(404).json({
        code: -3,
        message: 'Administracion no encontrado'
      });
    }

    // Actualizar los datos de la administracion
    await administracion.update(body);

    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'El administracion se ha actualizado',
      data: administracion
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al actualizar el administracion'
    });
  }
};

export const deleteAdministracion = async (req, res) => {
  try {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un estado 400 Bad Request
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    // Buscar un administracion por su ID en la base de datos y eliminarlo
    const deletedAdministracion = await Administracion.destroy({ where: { id_administracion: id } });

    // Verificar si la administracion fue encontrada y eliminada
    if (!deletedAdministracion) {
      return res.status(404).json({
        code: -100,
        message: 'Administracion no encontrada'
      });
     }
 
    // Enviar una respuesta al cliente
    res.status(200).json({
      code: 1,
      message: 'La administracion se ha eliminado'
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: -100,
      message: 'Ha ocurrido un error al eliminar la administracion'
    });
  }
};