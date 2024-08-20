const nombre: string = 'juan';

let edad: number = 98;

console.log(nombre, edad);

// -----

let num1: number = 3;
let num2: number = 5;

let resultNums: number;

resultNums = num1 + num2
 
console.log(resultNums);

// -----

let life: number;
life = life + 1;
// life += 1

console.log(life);

//____________________________________________________________________

/* TIPAR OBJETOS LITERALES */

const ciudadano: { nombre: string; edad: number } = {
  nombre: 'Juan',
  edad: 30,
};

//____________________________________________________________________

/* OBJETO PERO SIN TIPACION DE OBJETOS LITERALES, NO RECOMENDADO.  */

const usuarioEjemplo = { nombre: 'Juan', edad: 30 };

//____________________________________________________________________

/* OBJETO LITERAL CON ASERCIÓN DE TIPOS EN LA MISMA LÍNEA */

const usuarioEjemploDos = { nombre: 'Juan', edad: 30 } as {
  nombre: string;
  edad: number;
};

// IMPORTANTE:
// Ver la consola de JavaScript
// usar "any", "undifened", "or", o "|" no es recomendado
