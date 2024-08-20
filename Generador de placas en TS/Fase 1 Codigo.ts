/*
interface Iplates {
  serialPlate: string;
  cityPlate: string;
}

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

function getRandomCity(arr: string[]): string[] {
  let citiesLength = arr.length;

  let arrayCities: string[] = [];

  for (let i: number = 0; i < 100; i++) {
    let cityArrayValue = Math.floor(Math.random() * citiesLength);
    let city = arr[cityArrayValue];

    arrayCities.push(city);
  }
  return arrayCities;
}

const getedCity = getRandomCity(citiesCol);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let arrayListCity: string[] = Array.from(new Set(getedCity));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

arrayListCity.sort();

console.log('Las ciudades disponibles son: ' + arrayListCity);

//console.table(getedCity);

//_______________________________________________________________________

function getLettersRandom(numOfTimes: number): string[] {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = letters.length;

  let resultLetter = '';
  let arrayLetters: string[] = [];

  for (let i = 0; i < 100; i++) {
    resultLetter = '';

    for (let i = 0; i < numOfTimes; i++) {
      resultLetter =
        resultLetter +
        letters.charAt(Math.floor(Math.random() * charactersLength));
    }
    arrayLetters.push(resultLetter);
  }
  return arrayLetters;
}

const getedLetters = getLettersRandom(3);

//console.table(getedLetters);

//_______________________________________________________________________

function getNumberRandomInt(max: number): number[] {
  let arrayNumbers: number[] = [];

  for (let i = 0; i < 100; i++) {
    let processNumberRandom: number = Math.floor(Math.random() * max + 1);

    while (processNumberRandom <= 100) {
      processNumberRandom = Math.floor(Math.random() * max + 1);
    }
    arrayNumbers.push(processNumberRandom);
  }
  return arrayNumbers;
}

const getedNum = getNumberRandomInt(999);

//console.table(getedNum);

//_______________________________________________________________________

function joinSerials(serialLetters: string[], serialNum: Number[]): string[] {
  let arraySerials = [];

  for (let i = 0; i < 100; i++) {
    let joinArray = serialLetters[i].concat(' ' + serialNum[i]);

    arraySerials.push(joinArray);
  }
  return arraySerials;
}

const getedSerials = joinSerials(getedLetters, getedNum);

let arrayListJoinSerials: string[] = Array.from(new Set(getedSerials));

//console.table(getedSerials);

//_______________________________________________________________________

function licensePlateDataGenerator(
  serialNumberId: string[],
  fromTheCityOf: string[]
): Iplates[] {
  let arrayPlateData: Iplates[] = [];

  for (let i = 0; i < 100; i++) {
    arrayPlateData.push({
      serialPlate: serialNumberId[i],
      cityPlate: fromTheCityOf[i],
    });
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  arrayPlateData.sort((a, b) => a.cityPlate.localeCompare(b.cityPlate));
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return arrayPlateData;
}

const generatedPlateData = licensePlateDataGenerator(
  arrayListJoinSerials,
  getedCity
);

console.table(generatedPlateData);
*/

// No se necesita verificar placas ya que la probabilidad de repetir placa y ciudad es casi nula.
