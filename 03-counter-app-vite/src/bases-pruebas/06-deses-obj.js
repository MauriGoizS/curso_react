

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
}

// const { edad, clave, nombre } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );


const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    
    // console.log( nombre, edad, rango );

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 23.431,
            lng: -35.471,
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona( persona );
// const { lat, lng } = latlng

console.log( nombreClave, anios );
console.log( lat );
console.log( lng );