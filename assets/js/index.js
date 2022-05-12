/**********************************************
 **              DATA  BÁSICA                **
 **********************************************/

//* ARREGLOS
const radiologia = [
  { hora: "11:00", especialista: "Ignacio Schulz",      paciente: "Francisca Rojas",rut: "9878782-1",   prevision: "FONASA" },
  { hora: "11:30", especialista: "Federico Subercaseux",paciente: "Pamela Estrada", rut: "15345241-3",  prevision: "ISAPRE" },
  { hora: "15:00", especialista: "Fernando Wurthz",     paciente: "Armando Luna",   rut: "16445345-9",  prevision: "ISAPRE" },
  { hora: "15:30", especialista: "Ana María Godoy",     paciente: "Manuel Godoy",   rut: "17666419-0",  prevision: "FONASA" },
  { hora: "16:00", especialista: "Patricia Suazo",      paciente: "Ramón Ulloa",    rut: "14989389-K",  prevision: "FONASA" },
];

const traumatologia = [
  { hora: "08:00", especialista: "María Paz Altuzarra", paciente: "Paula Sánchez",  rut: "15554774-5",  prevision: "FONASA" },
  { hora: "10:00", especialista: "Raúl Araya",          paciente: "Angélica Navas", rut: "15444147-9",  prevision: "ISAPRE" },
  { hora: "10:30", especialista: "María Arriagada",     paciente: "Ana Klapp",      rut: "17879423-9",  prevision: "ISAPRE" },
  { hora: "11:00", especialista: "Alejandro Badilla",   paciente: "Felipe Mardones",rut: "15474423-6",  prevision: "ISAPRE" },
  { hora: "11:30", especialista: "Cecilia Budnik",      paciente: "Diego Marre",    rut: "16554741-K",  prevision: "FONASA" },
  { hora: "12:00", especialista: "Arturo Cavagnaro",    paciente: "Cecilia Méndez", rut: "9747535-8",   prevision: "ISAPRE" },
  { hora: "12:30", especialista: "Andrés Kanacri",      paciente: "Marcial Suazo",  rut: "11254785-5",  prevision: "ISAPRE" }
]; 

const dental = [
  { hora: "8:30",  especialista: "Andrea Zúñiga",       paciente: "Marcela Retamal",rut: "11123425-6",  prevision: "ISAPRE" },
  { hora: "11:00", especialista: "María Pía Zañartu",   paciente: "Ángel Muñoz",    rut: "9878789-2",   prevision: "ISAPRE" },
  { hora: "11:30", especialista: "Scarlett Witting",    paciente: "Mario Kast",     rut: "7997879-5",   prevision: "FONASA" },
  { hora: "13:00", especialista: "Francisco Von Teuber",paciente: "Karin Fernández",rut: "18887662-K",  prevision: "FONASA" },
  { hora: "13:30", especialista: "Eduardo Viñuela",     paciente: "Hugo Sánchez",   rut: "17665461-4",  prevision: "FONASA" },
  { hora: "14:00", especialista: "Raquel Villaseca",    paciente: "Ana Sepúlveda",  rut: "14441281-0",  prevision: "ISAPRE" }
];


/**********************************************
 **             REQUERIMIENTO 1              **
 **********************************************/

const nuevosPacientesTraumatologia = [
  { hora: "09:00", especialista: "René Poblete",   paciente: "Ana Gellona",   rut: "13123329-7", prevision: "ISAPRE" },
  { hora: "09:30", especialista: "María Solar",    paciente: "Ramiro Andrade",rut: "12221451-K", prevision: "FONASA" },
  { hora: "10:00", especialista: "Raúl Loyola",    paciente: "Carmen Isla",   rut: "10112348-3", prevision: "ISAPRE" },
  { hora: "10:30", especialista: "Antonio Larenas",paciente: "Pablo Loayza",  rut: "13453234-1", prevision: "ISAPRE" },
  { hora: "12:00", especialista: "Matías Aravena", paciente: "Susana Poblete",rut: "14345656-6", prevision: "FONASA" },
]; 

const nuevoTraumatologia = traumatologia.map(e => e);
nuevosPacientesTraumatologia.forEach(e => nuevoTraumatologia.push(e));

/**********************************************
 **             REQUERIMIENTO 2              **
 **********************************************/

const nuevoRadiologia = radiologia.map(e => e);
nuevoRadiologia.pop();
nuevoRadiologia.shift();

/**********************************************
 **             REQUERIMIENTO 3              **
 **********************************************/

const dentalOneLine = dental.map(e => Object.values(e).join(' - '));
const requerimiento3 = document.querySelector('div.requerimiento3');
dentalOneLine.forEach(e => requerimiento3.innerHTML += `<p>${e}</p>`);

/**********************************************
 **             REQUERIMIENTO 4              **
 **********************************************/

const todosPacientes = [];
[dental, nuevoRadiologia, nuevoTraumatologia].forEach(e => e.forEach(elem => todosPacientes.push(elem.paciente)));
const requerimiento4 = document.querySelector('div.requerimiento4');
todosPacientes.forEach(e => requerimiento4.innerHTML += `<p>${e}</p>`)

/**********************************************
 **             REQUERIMIENTO 5              **
 **********************************************/

const dentalIsapre = dental.filter(e => e.prevision === 'ISAPRE' );
const requerimiento5 = document.querySelector('div.requerimiento5');
dentalIsapre.forEach(e => requerimiento5.innerHTML += `<p>${e.paciente} - ${e.prevision}</p>`);



/**********************************************
 **             REQUERIMIENTO 6              **
 **********************************************/

const traumatologiaFonasa = traumatologia.filter(e => e.prevision === 'FONASA');
const requerimiento6 = document.querySelector('div.requerimiento6');
traumatologiaFonasa.forEach(e => requerimiento6.innerHTML += `<p>${e.paciente} - ${e.prevision}</p>`);
