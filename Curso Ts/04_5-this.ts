/* MÉTODOS DE UN OBJETO */

const coche = {
  marca: 'Toyota',
  mostrarMarca: function () {
    console.log(`La marca del coche es ${this.marca}`);
  },
};

coche.mostrarMarca(); // "La marca del coche es Toyota"

//____________________________________________________________________

const vehiculo = {
  marca: 'Renault',
  mostrarMarcaVehiculo: function () {
    const imprimir: string = 'La marca del coche es';
    return imprimir;
  },
};

const imprimirMarca = vehiculo.marca;

console.log(`La marca del coche es ` + imprimirMarca);

//-----------------------------------------------

const vehi = {
  marca: 'pepe',
  mostrarMarcVehi: function () {
    const imprime: string = `La marca del coche es ${this.marca}`;
    return imprime;
  },
};

const impriMarc = vehi.mostrarMarcVehi();
console.log(impriMarc);

/* Más tipos de uso del this ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */
