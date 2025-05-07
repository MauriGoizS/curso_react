const { retornaPersona } = require("../../src/bases-pruebas/06-deses-obj");

describe('Pruebas en 06-desed-obj', () => {
  test('Debe retornar un objeto ', () => {
    
        const clave = 'Tony';
        const edad = 45

        const testDeses = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 23.431,
                lng: -35.471,
            }
        };

        const retorna = retornaPersona( { clave, edad } );

        expect( testDeses ).toEqual(retorna);
    })
    
});
