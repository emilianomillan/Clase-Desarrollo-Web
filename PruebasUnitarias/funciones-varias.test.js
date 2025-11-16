const {esNumeroPar, crearPerfil, buscarFruta, obtenerPrimerElemento, validarEdad} = require("./funciones-varias.js");

test("Debe saber si un número es par o impar", () => {
  expect(esNumeroPar(4)).toBeTruthy();
  expect(esNumeroPar(5)).toBeFalsy();
});


test("Debe crear el perfil de usuario correctamente", () => {
  const perfilEsperado = { nombre: "Ana", edad: 25 };
  
  expect(crearPerfil("Ana", 25)).toEqual(perfilEsperado);
  expect(crearPerfil("Ana", 25)).toStrictEqual(perfilEsperado);
});


test("Debe devolver null si no encuentra la fruta", () => {
  const resultado = buscarFruta("sandía");
  
  expect(resultado).toBeNull();
});


test("Debe devolver undefined si la lista está vacía", () => {
  const listaVacia = [];
  
  expect(obtenerPrimerElemento(listaVacia)).toBeUndefined();
});


test("Debe lanzar un error si la edad es negativa", () => {
  expect(() => validarEdad(-5)).toThrow("La edad no puede ser negativa");
});

test("Debe lanzar un error si la edad es 0", () => {
  expect(() => validarEdad(0)).toThrow("La edad no puede ser 0");
});