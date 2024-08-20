/* GENÉRICOS */

/* FUNCIÓN CON GENÉRICO */

function identidad<T>(valor: T): T {
  return valor;
}

let numero = identidad(42);
let texto = identidad('Hola, mundo');
let booleano = identidad(true);

console.log(numero);
console.log(texto);
console.log(booleano);

//____________________________________________________________________

/* CLASE CON GENÉRICO */

class Caja<T> {
  contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  obtenerContenido(): T {
    return this.contenido;
  }
}

// Crear una caja que contenga un número
let cajaDeNumero = new Caja<number>(42);
console.log(cajaDeNumero.obtenerContenido()); // Salida: 42

// Crear una caja que contenga una cadena
let cajaDeTexto = new Caja<string>('Hola, mundo');
console.log(cajaDeTexto.obtenerContenido()); // Salida: Hola, mundo

// Crear una caja que contenga un booleano
let cajaDeBooleano = new Caja<boolean>(true);
console.log(cajaDeBooleano.obtenerContenido()); // Salida: true

//____________________________________________________________________

/* ARRAY GENERICO */

let Cajafrutas: Array<string> = ['Manzana', 'Naranja', 'Banana'];
