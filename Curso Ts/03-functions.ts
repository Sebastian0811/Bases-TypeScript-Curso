//firma // Definición de función con parámetros (estructura)

/* FUNCIÓN SIMPLE */

function SumaNumeros(a: number, b: number) {
  return a + b;
}

const resultNums: number = SumaNumeros(3, 4);
//const resultNums2: number = SumaNumeros(4, 2);

console.log({ resultNums });

//____________________________________________________________________

// Definición de función con parámetros (estructura)/los parametros de la funcion validan que el objeto que se vaya a inyectar cumpla con la estructura de la interfaz u otra estructura, sino se tendria que acceder directamente al objeto
function datos(nombre: string, apellido: string): string {
  const mensaje = `Mi nombre y apellido son ${nombre} ${apellido}`;

  return mensaje;
}

const imprimeDatos: string = datos('Juan', 'Vargas');

console.log(imprimeDatos);

//____________________________________________________________________

/* FUNCIÓN DE ARRAYS */

function combinarArreglos(arr1: string[], arr2: string[]): string[] {
  return arr1.concat(arr2);
}

const primerArreglo = ['Hola', 'Mundo'];
const segundoArreglo = ['¡Hola!', '¡Mundo!'];

const resultado = combinarArreglos(primerArreglo, segundoArreglo);
console.log(resultado); // ["Hola", "Mundo", "¡Hola!", "¡Mundo!"]

export {};

//____________________________________________________________________

/* FUNCIÓN COMO OBJETOS COMO ARGUMENTOS */

interface Usuario {
  nombre: string;
  edad: number;
}

function saludar(dataUsuario: Usuario): string {
  return `¡Hola, ${dataUsuario.nombre}! Tienes ${dataUsuario.edad} años.`;
}

// Inyección del objeto como argumentos que irán a los parámetros
const usuarioEjemplo = { nombre: 'Juan', edad: 30 };
console.log(saludar(usuarioEjemplo));

//+++++++++++++++++++++++++++++++++
// o mejor tambien (Buena práctica)

interface Usuario2 {
  nombre: string;
  edad: number;
}

function saludar2(dataUsuario2: Usuario): string {
  return `¡Hola, ${dataUsuario2.nombre}! Tienes ${dataUsuario2.edad} años.`;
}

const usuarioEjemplo2 = {
  nombre: 'Jhon',
  edad: 40,
};

let mensaje: string = saludar2(usuarioEjemplo2);

// Si se quita el console igual el proceso de hace
console.log(mensaje);

// La diferencia es que la inyeccion del objeto no se hace por consola sino por una variable, por ende asi no se llame por consola igual la inyeccion del objeto se hace, estoy bien?

//____________________________________________________________________

/* FUNCIÓN CON CONSOLE.LOG */

/* El console se usa para visualizar en consola y el retur para devolver un valor logico (casi siempre no se visualiza el resultado de manera grafica, sino que por debajo), depende de que se necesite */

interface ProductI {
  name: string;
  price: number;
}

let products: ProductI[] = [
  { name: 'shoes', price: 3 },
  { name: 'shorts', price: 7 },
  { name: 'hats', price: 2 },
];

function processProducts(dataArray: ProductI[]): void {
  console.table(dataArray);
}

// Se envia de una vez los datos
processProducts(products);

// let ProductsBox = processProducts(products); se usa si se quiere capturar el dato "processProducts(products);" y usarlo despues, y "processProducts(products);"" se usa directamente solo si se quiere enviar los datos a la funcion directamente

// let ProductsBox = processProducts(products);

//____________________________________________________________________

/* FUNCIÓN QUE GENERA UN NUMERO ALEATORIO */

function getNumberRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const dateNum: number = getNumberRandomInt(9);

console.log(dateNum);
