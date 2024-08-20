// Condicionales

/* If-Else */

let number: number = 5;

if (number > 0) {
  console.log('El número es positivo');
} else {
  console.log('El número es negativo o cero');
}
//__________________________________________________

/* Switch */

let fruit: string = 'banana'; // Si se escribe tal cual deberia aparecer "es una banana", se usaria como para menús

switch (fruit) {
  case 'manzana':
    console.log('Es una manzana');
    break;
  case 'banana':
    console.log('Es una banana');
    break;
  default:
    console.log('Fruta desconocida');
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BUCLES

/* For */

for (let i: number = 0; i < 5; i++) {
  console.log('Número: ' + i);
}

//__________________________________________________

/* while */

let count: number = 0;

while (count < 5) {
  console.log('Contador: ' + count);
  count++;
}

//__________________________________________________

/* Do-While */

let counter: number = 0;

do {
  console.log('Contador: ' + counter);
  counter++;
} while (counter < 5);

//__________________________________________________

/* For-Of (para arrays) */

let numbers: number[] = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

//__________________________________________________

/* For-In (para objetos) */

let person = { name: 'Sebastián', age: 25 };

for (let key in person) {
  console.log(key + ': ' + person[key as keyof typeof person]);
}
