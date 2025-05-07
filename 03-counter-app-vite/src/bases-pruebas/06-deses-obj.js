
export const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    
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
