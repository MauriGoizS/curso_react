const { getImage } = require("../../src/bases-pruebas/11-async-await");

describe('Pruebas en 11-async-await.js', () => {

    test('getImagen debe retornar un error si no tenemos apiKey', async() => {
        
        const resp = await getImage();

        expect( resp ).toBe( 'No se encontro la imagen' );

    });
    
});
