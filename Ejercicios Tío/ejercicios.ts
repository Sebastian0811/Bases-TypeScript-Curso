/*
// Aplicacion para biblioteca

interface Book {
  title: string;
  author: string;
  yearPublished: number
}

const miLibro: Book = {
  title: "100 Años de soledad",
  author: "Gabriel García Márquez",
  yearPublished: 1967
}

console.table (miLibro)
*/
//_____________________________________________________________________
/*
// Aplicacion para gestionar equipo de futbol

interface Player {
  name: string;
  position: string;
  number: number;
}

public function createPlayer(appear: Player): string {
  return `El jugador ${appear.name} juega en la posición ${appear.position} y lleva el número ${appear.number}.`;
}

const player1 = { name: "Haaland", position: "Delantero", number: 9};

console.log(createPlayer(player1));

//let appearMesage: string = createPlayer(player1);
//console.log(appearMesage);
*/
//_____________________________________________________________________
/*
// Manera erronea, estoy accediendo directamente al objeto

interface Player {
  name: string;
  position: string;
  number: number
}

//public function createPlayer (appear = jugadorUno) {

public function createPlayer () {
  console.log('El jugador', jugadorUno.name, 'juega en la posicion de',jugadorUno.position, 'y lleva el numero', jugadorUno.number);
  
  // console.log(`El jugador ${jugadorUno.name} juega en la posicion de ${jugadorUno.position} y lleva el numero ${jugadorUno.number}`);
}

const jugadorUno: Player = {
  name: 'Haaland',
  position: 'Delantero',
  number: 9
}

createPlayer();
*/
//_____________________________________________________________________
/*
// Aplicacion para una tienda de música en linea

interface Album {
  title: string;
  artist: string;
  yearReleased: number;
  tracks: string[];
}

function createAlbumSummary(dataAlbum: Album): string {
  // Obtener las cancione como texto separadas por coma
  let songText = dataAlbum.tracks.slice(0, -1).join(', '); // Une todas las canciones menos la última con coma

  // Agregar "y" antes de la última cancion
  songText += ` y ${dataAlbum.tracks.slice(-1)[0]}`; // Agrega la última cancion con "y"

  return `El album ${dataAlbum.title} de ${dataAlbum.artist}, lanzado en ${dataAlbum.yearReleased}, contien las siguientes canciones: ${songText}`;

  //return `El album ${dataAlbum.title} de ${dataAlbum.artist}, lanzado en ${dataAlbum.yearReleased}, contien las siguientes canciones: ${dataAlbum.tracks.join(', ')}`;
}

const albumGorillaz: Album = {
  title: 'Demon Days',
  artist: 'Gorillaz',
  yearReleased: 2005,
  tracks: [
    'Feel Good Inc.',
    '68 State',
    'Bill Murray',
    'Spitting Out The Demons',
    'Murdoc Is God',
    //'Las mañanitas',
  ],
};

let messageAlbum: string = createAlbumSummary(albumGorillaz);

console.log(messageAlbum);

// return ` le gusta la ${dataAlbum.tracks[0]} y en su canasta tiene ${songText}`;
*/
//_____________________________________________________________________
/*
// Aplicación simple que maneja la información de un usuario.

interface UserI {
  nameUser: string;
  ageUser: number;
  emailUser: string;
}

const UserInfo: UserI = {
  nameUser: 'Santiago',
  ageUser: 28,
  emailUser: 'santiago.123@gmail.com',
};

const UserInfoTwo: UserI = {
  nameUser: 'Steven',
  ageUser: 28,
  emailUser: 'steven.321@gmail.com',
};

// Se define la estructura a usar
function showMessageWithDestructuring(dataUser: UserI): string {
  const { nameUser, emailUser } = dataUser;

  return `Su nombre es ${nameUser} y su correo electronico es ${emailUser}`;
}

const sendObject: string = showMessageWithDestructuring(UserInfo);
const sendObjectTwo: string = showMessageWithDestructuring(UserInfoTwo);

console.log(sendObject, sendObjectTwo);
*/
//_____________________________________________________________________
/*
// aplicación para gestionar una lista de productos.

interface ProductI {
  name: string;
  price: number;
}

let productsBox: ProductI[] = [
  { name: 'zapatos', price: 3 },
  { name: 'medias', price: 7 },
  { name: 'sombreros', price: 2 },
];

function processProducts(dataArray: ProductI[]): string {
  console.table(dataArray);

  const nameOn = productsBox[0];
  const nameTw = productsBox[1];
  const nameTh = productsBox[2];

  return `Los nombres de los productos son: ${nameOn.name}, ${nameTw.name} y ${nameTh.name}`;
}

const dObj = processProducts(productsBox);

const [productOne, productTwo] = productsBox;
console.log(productsBox[0], productsBox[1]);

console.log(dObj);
*/
