/* INTERFACES */

interface IPersonaje {
  nombre: string;
  vida: number;
  fuerza: number;
  ulti?: {
    nombreUlti: string;
    dano: number;
  };
  mostrarVida?: () => number;
}

let protagonista: IPersonaje = {
  nombre: 'goku',
  vida: 300,
  fuerza: 900,
  ulti: {
    nombreUlti: 'kameha',
    dano: 70000,
  },
};

let protagonista2: IPersonaje = {
  nombre: 'vegeta',
  vida: 600,
  fuerza: 200,
};

protagonista2.ulti = {
  nombreUlti: 'Plasm',
  dano: 400,
};

console.log(protagonista2);

//++++++++++++++++++++++++++++++++++++

/*
interface PersonajeI {
  nombre: string;
  vida: number;
  fuerza: number;
  ulti?: Ulti;
}

interface Ulti {
  nombreUlti: string;
  daño: number;
}

let protagonista: PersonajeI = {
  nombre: 'goku',
  vida: 300,
  fuerza: 900,
  ulti: {
    nombreUlti: 'kameha',
    daño: 70000,
  },
};

console.log(protagonista);
*/

//____________________________________________________________________

/* ARRAY NORMAL */

// let heroes: string[] = ["Iron Man", "Spiderman", "Thor", "Hulk", "Black Widow", "Hawk Eye" ];

let heroes: string[] = [
  'Iron Man',
  'Spiderman',
  'Thor',
  'Hulk',
  'Black Widow',
  'Hawk Eye',
];

//____________________________________________________________________

/* ARRAY DE OBJETOS */

// EstadosDeLaMateria es el nombre del array y { id: number; name: string } son el tipo de propiedades que tendrá los objetos

let estadosDeLaMateria: { id: number; name: string }[] = [
  { id: 1, name: 'solido' },
  { id: 2, name: 'liquido' },
  { id: 3, name: 'gaseoso' },
];

//____________________________________________________________________

/* ARRAY DE OBJETOS CON INTERFAZ */

interface IProductShop {
  nameProduct: string;
  priceProduct: number;
}

let productsShop: IProductShop[] = [
  { nameProduct: 'shoes', priceProduct: 3 },
  { nameProduct: 'shorts', priceProduct: 7 },
  { nameProduct: 'hats', priceProduct: 2 },
];
