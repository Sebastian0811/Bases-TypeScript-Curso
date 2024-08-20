/* CLASES */

/* CLASE BASICA */

export class Person {
  public name: string;
  public lastName: string;
  public address: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
    this.address = 'New York';
  }
}

const personIronMan = new Person('Tony', 'Stark');

console.log(personIronMan); // name: "Tony", lastName: "Stark", address: "New York"

//____________________________________________________________________

/* EXTENDER UNA CLASE (SUB CLASE) */

class MoldeDelPastel {
  forma: string;
  sabor: string;
  color: string;

  constructor(forma: string, sabor: string, color: string) {
    this.forma = forma;
    this.sabor = sabor;
    this.color = color;
  }

  describirPastel(): void {
    console.log(
      `Este es un pastel en forma de ${this.forma}, de sabor ${this.sabor}, color ${this.color}.`
    );
  }
}
// La clase anterior es la clase base
// La siguiente es la clase extendida

class MoldePastelCircular extends MoldeDelPastel {
  constructor(sabor: string, color: string) {
    // (Super) se utiliza para llamar al constructor de la clase padre. Necesitamos asegurarnos de que el constructor de la clase padre se ejecute antes de inicializar cualquier cosa en la subclase.
    super('círculo', sabor, color);
  }

  calcularArea(radio: number): number {
    return Math.PI * Math.pow(radio, 2);
  }

  describirPastel(): void {
    super.describirPastel();
    console.log('Este pastel es redondo.');
  }
}

let pastelCircular = new MoldePastelCircular('vainilla', 'blanco');

pastelCircular.describirPastel(); // Salida: Este es un pastel en forma de círculo, de sabor vainilla, color blanco. Este pastel es redondo.
console.log('Área del pastel circular:', pastelCircular.calcularArea(5));
// Salida: Área del pastel circular: 78.53981633974483

//____________________________________________________________________

/* PRIORIZAR LA COMPOSICION SOBRE LA HERENCIA */

class Forma {
  tipo: string;

  constructor(tipo: string) {
    this.tipo = tipo;
  }

  describirForma(): void {
    console.log(`Forma: ${this.tipo}`);
  }
}

class Sabor {
  tipo: string;

  constructor(tipo: string) {
    this.tipo = tipo;
  }

  describirSabor(): void {
    console.log(`Sabor: ${this.tipo}`);
  }
}

class Color {
  tono: string;

  constructor(tono: string) {
    this.tono = tono;
  }

  describirColor(): void {
    console.log(`Color: ${this.tono}`);
  }
}

// Uso de Composición en la Clase Principal

class MoldePastel {
  forma: Forma;
  sabor: Sabor;
  color: Color;

  constructor(forma: Forma, sabor: Sabor, color: Color) {
    this.forma = forma;
    this.sabor = sabor;
    this.color = color;
  }

  describirPastel(): void {
    this.forma.describirForma();
    this.sabor.describirSabor();
    this.color.describirColor();
  }
}

// Crear componentes individuales
let formaCorazon = new Forma('corazón');
let saborChocolate = new Sabor('chocolate');
let colorMarron = new Color('marrón');

// Crear un pastel usando composición
let pastelCorazon = new MoldePastel(formaCorazon, saborChocolate, colorMarron);
pastelCorazon.describirPastel();
// Salida:
// Forma: corazón
// Sabor: chocolate
// Color: marrón
