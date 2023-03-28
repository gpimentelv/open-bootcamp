class Persona {
  #edad;
  #nombre;
  #telefono;

  constructor(edad, nombre, telefono) {
    this.#edad = edad;
    this.#nombre = nombre;
    this.#telefono = telefono;
  }

  get edad() {
    return this.#edad;
  }

  set edad(value) {
    if (value < 0) {
      console.error('La edad NUNCA puede ser negativa');
      return;
    }
    this.#edad = value;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(value) {
    if (value.length === 0) {
      console.error('El nombre no puede astar vacío');
      return;
    }
    this.#nombre = value;
  }

  get telefono() {
    return this.#telefono;
  }

  set telefono(value) {
    if (value.length < 7) {
      console.error('El numero de teléfono debe tener al menos 7 caracteres');
      return;
    }
    this.#telefono = value;
  }
}

const edad = parseInt(prompt('Ingrese la edad:'));
const nombre = prompt('Ingrese el nombre:');
const telefono = prompt('Ingrese el teléfono:');

const persona = new Persona(edad, nombre, telefono);
console.log(persona.edad, persona.nombre, persona.telefono);
