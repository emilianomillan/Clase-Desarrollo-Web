function saludarUsuario(nombre) {
    console.log("Hola, " + nombre + "! Bienvenido al curso de programación.");
}

function repetirTexto(texto, veces) {
    return (texto + " ").repeat(veces);
}

function invertirPalabra(palabra) {
    return palabra.split("").reverse().join("");
}

function contarVocales(texto) {
    let contador = 0;
    for (let letra of texto.toLowerCase()) {
        if ("aeiou".includes(letra)) {
            contador += 1;
        }
    }
    return contador;
}

function mayusculasYMinusculas(texto) {
    return [texto.toUpperCase(), texto.toLowerCase()];
}

function promedioLista(numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    return numeros.reduce((a, b) => a + b, 0) / numeros.length;
}

function maximoYMinimo(numeros) {
    return [Math.max(...numeros), Math.min(...numeros)];
}

function filtrarPares(numeros) {
    return numeros.filter(n => n % 2 === 0);
}

function sumarElementosTexto(listaTextos) {
    return listaTextos.join(" ");
}

function buscarElemento(lista, elemento) {
    return lista.includes(elemento);
}

function contarPalabras(frase) {
    let palabras = frase.split(" ");
    return palabras.length;
}

function duplicarElementos(lista) {
    return lista.map(x => x * 2);
}

function capitalizarPalabras(frase) {
    return frase.split(" ").map(palabra => 
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    ).join(" ");
}

function mezclarListas(lista1, lista2) {
    for (let i = 0; i < longitud; i++) {
        combinada.push(lista1[i]);
        combinada.push(lista2[i]);
    }
    return combinada;
}

function contarFrecuencia(lista) {
    let conteo = {};
    for (let item of lista) {
        if (item in conteo) {
            conteo[item] += 1;
        } else {
            conteo[item] = 1;
        }
    }
    return conteo;
}