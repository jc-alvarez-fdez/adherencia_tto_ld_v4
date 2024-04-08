// app.js
import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors'; //para poder hacer puts, y tal desde el cliente al servidor
import routerAuth from './routes/auth_routes.js';
import routerPacientes from './routes/paciente_routes.js';
import routerMedicamentos from './routes/medicamento_routes.js';
import routerAdministraciones from './routes/administracion_routes.js';
//import bookRoutes from './routes/bookRoutes.js';
import { testConnection } from './db.js';
import dotenv from 'dotenv';
import { insertInitialPacienteData } from './start_data.js';
dotenv.config();

const app = express();

// Configura el middleware CORS para que pueda recibir solicitudes de POST, PUT, DELETE, UPDATE, etc.

app.use(cors());
/*
app.use(cors({
  credentials: true,
  origin:  process.env.CLIENT_URL,
  //origin: 'http://localhost:3000',
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'UPDATE'],
}));
*/

//header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser()); 


// Middleware para analizar el cuerpo de las solicitudes con formato JSON
app.use(express.json());

// Middleware para analizar el cuerpo de las solicitudes con datos de formulario
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formularios en el cuerpo de la solicitud

await testConnection();
await insertInitialPacienteData();

// Configurar rutas
app.use('/auth', routerAuth);
app.use('/pacientes', routerPacientes);
app.use('/medicamentos', routerMedicamentos);
app.use('/administraciones', routerAdministraciones);
//app.use('/book', bookRoutes);

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
