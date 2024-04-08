import Paciente from './models/paciente_model.js';
//import Book from './models/bookModel.js';


const insertInitialPacienteData = async () => {

  const pacienteData = [
    { email: 'ismael.academy@gmail.com', password: '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q',nombre: 'Ismael', }, //pass: ismael123
    { email: 'laura@hotmail.com', password: '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', nombre: 'Laura' },
    { email: 'maria@hotmail.com', password: '$2b$10$tXrqo7VdSPCLAsIUhrVsYejYeMt9FLo9J4OchgCKwuDvpeDK6Xf1q', nombre: 'Maria', apellidos: 'kale' }
  ];
  // Insertar datos con opción ignoreDuplicates
  // Para actualizar todas las filas: updateOnDuplicate: Object.keys(Paciente.rawAttributes)
  await Paciente.bulkCreate(pacienteData, { ignoreDuplicates: true });
  
  /* const bookData = [
    { title: 'TituloA', year: 1955 },
    { title: 'TituloB', year: 1988 },
    { title: 'TituloC', year: 1475, paciente_id: 2 }
  ]; */
  // Insertar datos con opción ignoreDuplicates
 // await Book.bulkCreate(bookData, { ignoreDuplicates: true });
}

export { insertInitialPacienteData };
