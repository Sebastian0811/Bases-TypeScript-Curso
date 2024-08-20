// Condicionales (Son estructuras que permiten tomar decisiones en el código basadas en condiciones lógicas. Se evalúa una condición y, dependiendo de si es verdadera o falsa, se ejecuta un bloque de código u otro.)

/* If-Else */

// El if-else se usa para ejecutar un bloque de código si una condición es verdadera, y otro bloque si la condición es falsa.

if (condición) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}

//__________________________________________________

/* Switch */

// El switch se usa para seleccionar una de varias opciones posibles basadas en el valor de una variable.

switch (expresión) {
  case valor1:
    // código a ejecutar si expresión === valor1
    break;
  case valor2:
    // código a ejecutar si expresión === valor2
    break;
  // puedes tener tantos casos como necesites
  default:
  // código a ejecutar si ninguno de los casos anteriores coincide
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BUCLES (Son estructuras que permiten repetir un bloque de código varias veces. Se usan para realizar tareas repetitivas sin tener que escribir el mismo código muchas veces.)

/* For */

// El for se usa para repetir un bloque de código un número específico de veces.

for (inicialización; condición; incremento) {
  // código a ejecutar en cada iteración
}

//__________________________________________________

/* while */

// El while se usa para repetir un bloque de código mientras una condición sea verdadera.

while (condición) {
  // código a ejecutar mientras la condición sea verdadera
}

//__________________________________________________

/* Do-While */

// El do-while es similar al while, pero asegura que el bloque de código se ejecute al menos una vez antes de comprobar la condición.

do {
  // código a ejecutar al menos una vez, y luego mientras la condición sea verdadera
} while (condición);

//__________________________________________________

/* For-Of (para arrays) */

// El for-of se usa para recorrer cada elemento de un array y ejecutar un bloque de código para cada elemento.

for (variable of iterable) {
  // código a ejecutar para cada elemento del iterable
}

//__________________________________________________

/* For-In (para objetos) */

// El for-in se usa para recorrer todas las propiedades de un objeto y ejecutar un bloque de código para cada propiedad.

for (variable in objeto) {
  // código a ejecutar para cada propiedad del objeto
}
