
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45, 
    direccion: {
        ciudad: 'New York',
        zip: 2334321,
        lat: 12.56453,
        lng: 23.5782,
    }
}

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 )