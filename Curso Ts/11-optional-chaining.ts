/* ENCADENAMIENTO OPCIONAL */

// Definimos un objeto persona que puede tener nombreCompleto o no
let persona = {
  edad: 25,
  // nombreCompleto: "Sebastián Martínez",
};

// Usamos el encadenamiento opcional para obtener la longitud del nombre y edad completo si está definido
// let longitudNombre = persona.nombreCompleto?.length;
let longitudEdad = persona.edad?.toString().length;

// Mostramos el resultado
//console.log('Longitud del nombre completo:', longitudNombre);
console.log('Longitud del nombre completo:', longitudEdad);
