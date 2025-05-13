const { getImage } = require("../../src/bases-pruebas/11-async-await");

describe('Pruebas en 11-async-await.js', () => {

    test('getImagen debe retornar un url de la imagen', async() => {
        
        const url = await getImage();
        console.log( url );

        expect(typeof url).toBe( 'string' );

    });
    
});
