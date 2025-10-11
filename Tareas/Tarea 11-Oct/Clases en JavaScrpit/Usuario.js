class Usuario {
  constructor(nombre, email, edad) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
  }

  saludar() {
    return `Hola, mi nombre es ${this.nombre}`;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  actualizarEmail(nuevoEmail) {
    this.email = nuevoEmail;
    return `Email actualizado a: ${this.email}`;
  }
}

const usuario1 = new Usuario('Ana García', 'ana34@gmail.com', 25);
const usuario2 = new Usuario('Carlos López', 'carlos21@gmail.com', 16);

console.log(usuario1.saludar());
console.log('¿Es mayor de edad?', usuario2.esMayorDeEdad());
console.log(usuario1.actualizarEmail('ana.garcia@nuevo.com'));