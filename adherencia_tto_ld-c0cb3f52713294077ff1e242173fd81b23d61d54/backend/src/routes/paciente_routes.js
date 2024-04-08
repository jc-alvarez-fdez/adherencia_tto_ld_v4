// src/routes/paciente_routes.js
import { Router } from 'express';
import { getPacientes, getPacienteById, addPaciente, updatePaciente, deletePaciente } from "../controllers/paciente_controller.js";
import authenticateToken from '../middlewares/authenticate_token.js';
import { pacienteValidator } from '../validations/paciente_validation.js';
import { idValidator } from '../validations/generic_validation.js'

const routerPacientes = Router();

// Rutas para crud de pacientes
routerPacientes.get('/', authenticateToken, getPacientes); //devuelve todos los pacientes
routerPacientes.get('/:id', authenticateToken, idValidator, getPacienteById); //devuelve paciente por id
routerPacientes.post('/', authenticateToken, pacienteValidator, addPaciente); // añade paciente
routerPacientes.put('/:id', authenticateToken, idValidator, pacienteValidator, updatePaciente); // actualiza paciente
routerPacientes.delete('/:id', authenticateToken, idValidator, deletePaciente); // elimina paciente por id

export default routerPacientes;