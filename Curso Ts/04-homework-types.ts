/*
    ===== TAREA Código de TypeScript =====

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  //firma
  showAddress: () => string;
}

interface Address {
  street: string;
  country: string;
  city: string;
}

//____________________________________________________________________

const superHeroe: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: 'Main St',
    country: 'USA',
    city: 'NY',
  },
  showAddress() {
    return this.name + ', ' + this.address.city + ', ' + this.address.country;
  },
};

const address = superHeroe.showAddress();
console.log(address);

export {};

*/

//____________________________________________________________________

interface SuperHero {
  name: string;
  age: number;
  // FIRMA
  showMessage: () => string;
}

const ironMan: SuperHero = {
  name: 'Tony Stark',
  age: 45,
  showMessage: () => {
    const revelacion: string = '¡Soy Iron Man!';
    return revelacion;
  },
};

const declaracion = ironMan.name;
const declaracionDos = ironMan.showMessage();

console.log('Me llamo ' + declaracion + ' y yo ' + declaracionDos);

//____________________________________________________________________

/*
/* FUNCIÓN NORMAL */
function sumar(a, b) {
  return a + b;
}

/* FUNCIÓN FLECHA */
const sumarFlecha = (a, b) => a + b;
