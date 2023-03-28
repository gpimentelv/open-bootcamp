// Crear laCalse Persona
class Persona {
  constructor(edad, nombre, telefono) {
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

// Crear la Clase Cliente -- hereda de Persona
class Cliente extends Persona {
  constructor(edad, nombre, telefono, credito) {
    super(edad, nombre, telefono);
    this.credito = credito;
  }
}

// Ingreso de datos para crear un objeto de Cliente
const edadCliente = parseInt(prompt("Ingrese la edad:"));
const nombreCliente = prompt("Ingrese el nombre:");
const telefonoCliente = prompt("Ingrese el numero de teléfono:");
const creditoCliente = parseInt(prompt("Ingrese el crédito:"));

// Crear objeto Cliente y presentar sus propiedades
const cliente1 = new Cliente(edadCliente, nombreCliente, telefonoCliente, creditoCliente);
console.log(`Cliente1: Edad: ${cliente1.edad}, Nombre: ${cliente1.nombre}, Teléfono: ${cliente1.telefono}, Crédito: ${cliente1.credito}`);

// Clase Trabajador -- hereda de Persona
class Trabajador extends Persona {
  constructor(edad, nombre, telefono, salario) {
    super(edad, nombre, telefono);
    this.salario = salario;
  }
}

// Ingreso de datos para crear un objeto de la clase Trabajador
const edadTrabajador = parseInt(prompt("Ingrese edad del trabajador:"));
const nombreTrabajador = prompt("Ingrese nombre del trabajador:");
const telefonoTrabajador = prompt("Ingrese teléfono del trabajador:");
const salarioTrabajador = parseInt(prompt("Ingrese salario del trabajador:"));

// Crear objeto Trabajador y presentar sus propiedades
const trabajador1 = new Trabajador(edadTrabajador, nombreTrabajador, telefonoTrabajador, salarioTrabajador);
console.log(`Trabajador1: Edad: ${trabajador1.edad}, Nombre: ${trabajador1.nombre}, Teléfono: ${trabajador1.telefono}, Salario: ${trabajador1.salario}`);
