function esNumeroPar(numero) {
  return numero % 2 === 0;
}

function crearPerfil(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad
  };
}

function buscarFruta(fruta) {
  const refrigerador = ["manzana", "banana", "pera"];
  
  if (refrigerador.includes(fruta)) {
    return fruta;
  } else {
    return null;
  }
}

function obtenerPrimerElemento(lista) {
  return lista[0];
}

function validarEdad(edad) {
  if (edad < 0) {
    throw new Error("La edad no puede ser negativa");
  }
  else if (edad === 0) {
    throw new Error("La edad no puede ser 0");
  }

  return "Edad válida";
}

module.exports = {
  esNumeroPar,
  crearPerfil,
  buscarFruta,
  obtenerPrimerElemento,
  validarEdad
};