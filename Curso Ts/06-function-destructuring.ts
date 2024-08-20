/* DESESTRUCTURACIÓN DE ARGUMENTOS (FUNCIONES/MÉTODOS) */

export interface Song {
  title: string;
  artist: string;
  genres: string[];
  ageExit?: number;
}

/*
 * En esta función, usamos desestructuración de argumentos.
 * Esto significa que extraemos las propiedades (title, artist, genres)
 * del objeto `mySong` directamente en los parámetros de la función.
 *
 * Ejemplo:
 * - Parámetros: function showSongInfo({ title, artist, genres }: Song)
 * - Argumentos: showSongInfo(mySong)
 *
 * Así, podemos usar `title`, `artist`, y `genres` directamente en la función.
 */

function showSongInfo({ title, artist, genres }: Song) {
  // la desestrucutracion de argumentos se ve en ${artist} y ${artist} etc.
  console.log(`La canción "${title}" es interpretada por ${artist}.`);
  console.log(`Géneros: ${genres.join(', ')}.`);
}

const mySong: Song = {
  title: 'Bohemian Rhapsody',
  artist: 'Queen',
  genres: ['Rock', 'Opera', 'Progressive Rock'],
  ageExit: 2022,
};

showSongInfo(mySong);

// Si sí se sabe o no que una funcion o metodo va a recibir mas de 3 argumentos o que los argumentos puedan crecer a futuro entonces se aconseja transformarlos en un objeto (y si el objeto es personalizado entonces crear una interfaz)

//____________________________________________________________________

/* DESESTRUCTURACIÓN DE OBJETOS EN UNA FUNCIÓN CON OBJETOS COMO ARGUMENTOS */

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
