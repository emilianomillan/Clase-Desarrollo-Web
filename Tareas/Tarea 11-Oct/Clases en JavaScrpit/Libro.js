class Libro {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }

  obtenerInfo() {
    return `"${this.titulo}" por ${this.autor} - ${this.paginas} páginas`;
  }

  calcularTiempoLectura() {
    const paginasPorHora = 50;
    const horas = Math.round(this.paginas / paginasPorHora);
    return `Tiempo estimado de lectura: ${horas} horas`;
  }

  esMasLargoQue(otroLibro) {
    if (this.paginas > otroLibro.paginas) {
      return `"${this.titulo}" es más largo que "${otroLibro.titulo}"`;
    }
    return `"${this.titulo}" es más corto que "${otroLibro.titulo}"`;
  }
}

const libro1 = new Libro('Cien años de soledad', 'Gabriel García Márquez', 471);
const libro2 = new Libro('El principito', 'Antoine de Saint', 96);

console.log(libro1.obtenerInfo());
console.log(libro1.calcularTiempoLectura());
console.log(libro1.esMasLargoQue(libro2));