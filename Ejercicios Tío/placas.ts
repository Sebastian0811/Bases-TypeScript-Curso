/*
// Aquí se inicializan los parámetros

const data = {
  iteracion: 3,
  letras: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeros: '0123456789',
  cantidad: 100,
};

const citiesCol = [
  'Ibagué',
  'Bogotá',
  'Cali',
  'Medellín',
  'Manizales',
  'Barranquilla',
  'Pasto',
  'Santa Marta',
  'Cúcuta',
  'Neiva',
  'Soacha',
  'Guajira',
  'Armenia',
  'Bucaramanga',
  'San andrés',
  'Pereira',
];

const getedLetters = getLettersRandom(data, citiesCol);
console.table(getedLetters);

// Aqui inicia el proceso

function getLettersRandom(data: any, ciudades: string[]): string[] {
  const { iteracion, letras, numeros, cantidad } = data;
  const charactersLength = letras.length;
  const numerosLength = numeros.length;
  const citiesLength = ciudades.length;

  let placas: any[] = [];
  let placasOrden: any[] = [];

  for (let i = 0; i < cantidad; i++) {
    let resultLetter = '';
    let resultNumeros = '';

    let cityArrayValue = Math.floor(Math.random() * citiesLength);
    let city = ciudades[cityArrayValue];

    for (let i = 0; i < iteracion; i++) {
      resultLetter =
        resultLetter +
        letras.charAt(Math.floor(Math.random() * charactersLength));
      resultNumeros =
        resultNumeros +
        numeros.charAt(Math.floor(Math.random() * numerosLength));
    }

    placas.push({
      serial: resultLetter + resultNumeros,
      city: city,
    });
    placasOrden = placas.sort((a, b) => a.city.localeCompare(b.city));
  }
  return placasOrden;
}

*/
