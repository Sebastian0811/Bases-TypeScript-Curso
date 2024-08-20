/* DESESTRUCTURACIÓN DE OBJETOS */

interface BandaI {
  vocalista: string;
  guitarrista: string;
  bajista: string;
  baterista: string;
}

// La banda completa
const bandaCompleta: BandaI = {
  vocalista: 'Luisa',
  guitarrista: 'Carlos',
  bajista: 'Ana',
  baterista: 'Miguel',
};

// Preparando para un concierto acústico, solo necesitamos al vocalista y al guitarrista
const { vocalista, guitarrista } = bandaCompleta;

console.log(vocalista); // 'Luisa'
console.log(guitarrista); // 'Carlos'

//____________________________________________________________________

/* EJEMPLO CON UN OBJETO ANIDADO */

interface Instrumento {
  tipo: string;
  marca: string;
  color: string;
}

interface Musico {
  nombreMusico: string;
  instrumento: Instrumento;
}

// Supongamos que tienes un músico que toca un instrumento específico
const flautista: Musico = {
  nombreMusico: 'Carlos',
  instrumento: {
    tipo: 'guitarra',
    marca: 'Yamaha',
    color: 'Rojo',
  },
};

// Desestructuración del objeto anidado
const {
  nombreMusico,
  instrumento: { tipo, marca },
} = flautista;

console.log(nombreMusico); // 'Carlos'
console.log(tipo); // 'guitarra'
console.log(marca); // 'Fender'

//____________________________________________________________________

/* DESESTRUCTURACION DE ARREGLOS / ARRAYS */

const equipo = [
  { nombre: 'Juan', posicion: 'Delantero', habilidad: 'Velocidad' },
  { nombre: 'Carlos', posicion: 'Defensor', habilidad: 'Marcaje' },
  { nombre: 'Laura', posicion: 'Portero', habilidad: 'Reflejos' },
];

// Sin desestructuración
const delantero = equipo[0];
const centrocampista = equipo[1];

console.log(delantero.nombre); // Juan
console.log(centrocampista.habilidad); // Marcaje

// Con desestructuración
const [delanteroDes, centrocampistaDes] = equipo;
console.log(delanteroDes.nombre); // Juan
console.log(centrocampistaDes.habilidad); // Precisión en los pases
