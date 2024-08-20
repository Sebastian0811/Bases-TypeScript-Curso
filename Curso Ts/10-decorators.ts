/* DECORADORES */

// Definimos un decorador de clase
function anunciarBanda(constructor: Function) {
  console.log('¡La banda está lista para tocar!');
}

// Aplicamos el decorador a la clase Banda
@anunciarBanda
class Banda {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

const banda = new Banda('Los Rockeros');

//____________________________________________________________________

/* DECORADOR DE MÉTODO */

function eco(target: any, key: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log('Aplicando efecto de eco...');
    return metodoOriginal.apply(this, args);
  };

  return descriptor;
}

class Cantante {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  @eco
  cantar() {
    console.log(`${this.nombre} está cantando una canción.`);
  }
}

const cantante = new Cantante('Sebastián');
cantante.cantar();
