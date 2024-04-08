// src/routes/medicamento_routes.js
import { Router } from 'express';
import { getMedicamentos, getMedicamentoById, addMedicamento, updateMedicamento, deleteMedicamento } from "../controllers/medicamento_controller.js";
import authenticateToken from '../middlewares/authenticate_token.js';
import { medicamentoValidator } from '../validations/medicamento_validation.js';
import { idValidator } from '../validations/generic_validation.js'


const routerMedicamentos = Router();

// Rutas para crud de medicamentos
routerMedicamentos.get('/', authenticateToken, getMedicamentos); //devuelve todos los medicamentos
routerMedicamentos.get('/:id', authenticateToken, idValidator, getMedicamentoById); //devuelve medicamento por id
routerMedicamentos.post('/', authenticateToken, medicamentoValidator, addMedicamento); // añade medicamento
routerMedicamentos.put('/:id', authenticateToken, idValidator, medicamentoValidator, updateMedicamento); // actualiza medicamento
routerMedicamentos.delete('/:id', authenticateToken, idValidator, deleteMedicamento); // elimina medicamento por id

export default routerMedicamentos;