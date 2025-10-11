class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  calcularTotal(cantidad) {
    return this.precio * cantidad;
  }

  hayDisponible(cantidad) {
    return this.stock >= cantidad;
  }

  vender(cantidad) {
    if (this.hayDisponible(cantidad)) {
      this.stock -= cantidad;
      return `Venta exitosa. Total: $${this.calcularTotal(cantidad)}`;
    }
    return 'Stock insuficiente';
  }
}

const producto1 = new Producto('Laptop', 1200, 10);
const producto2 = new Producto('Mouse', 25, 50);

console.log(producto1.calcularTotal(2));
console.log(producto1.hayDisponible(5));
console.log(producto1.vender(3));
console.log('Stock restante:', producto1.stock);