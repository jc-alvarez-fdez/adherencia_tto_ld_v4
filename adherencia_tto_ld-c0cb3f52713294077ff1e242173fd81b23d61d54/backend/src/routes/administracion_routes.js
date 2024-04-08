// src/routes/administracion_routes.js
import { Router } from 'express';
import { getAdministraciones, getAdministracionById, addAdministracion, updateAdministracion, deleteAdministracion } from "../controllers/administracion_controller.js";
import authenticateToken from '../middlewares/authenticate_token.js';
import { administracionValidator } from '../validations/administracion_validation.js';
import { idValidator } from '../validations/generic_validation.js'

const routerAdministraciones = Router();

// Rutas para crud de administraciones
routerAdministraciones.get('/', authenticateToken, getAdministraciones); //devuelve todos los administraciones
routerAdministraciones.get('/:id', authenticateToken, idValidator, getAdministracionById); //devuelve administracion por id
routerAdministraciones.post('/', authenticateToken, administracionValidator, addAdministracion); // añade administracion
routerAdministraciones.put('/:id', authenticateToken, idValidator, administracionValidator, updateAdministracion); // actualiza administracion
routerAdministraciones.delete('/:id', authenticateToken, idValidator, deleteAdministracion); // elimina administracion por id

export default routerAdministraciones; 