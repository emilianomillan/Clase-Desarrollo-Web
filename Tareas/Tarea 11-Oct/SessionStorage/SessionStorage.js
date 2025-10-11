function insertarDato(clave, valor) {
  sessionStorage.setItem(clave, valor);
  console.log(`Dato insertado: ${clave} = ${valor}`);
}

function obtenerDato(clave) {
  const valor = sessionStorage.getItem(clave);
  console.log(`Valor de ${clave}: ${valor}`);
  return valor;
}

function existeDato(clave) {
  const existe = sessionStorage.getItem(clave) !== null;
  console.log(`¿Existe "${clave}"? ${existe ? "Sí" : "No"}`);
  return existe;
}

function eliminarDato(clave) {
  sessionStorage.removeItem(clave);
  console.log(`Dato eliminado: ${clave}`);
}

function eliminarTodo() {
  sessionStorage.clear();
  console.log("Todos los datos han sido eliminados");
}


console.log("Inserción ");
insertarDato("usuario", "Juan Pérez");
insertarDato("tema", "oscuro");
insertarDato("idioma", "español");

const datosUsuario = {
  nombre: "Juan Pérez",
  email: "juan@email.com",
  edad: 25
};
insertarObjeto("perfil", datosUsuario);

console.log("\nConsulta");
obtenerDato("usuario");
obtenerDato("tema");
obtenerObjeto("perfil");

console.log("\nVerificar existencia");
existeDato("usuario");
existeDato("password");

console.log("\nEliminación");
eliminarDato("tema");

existeDato("tema");