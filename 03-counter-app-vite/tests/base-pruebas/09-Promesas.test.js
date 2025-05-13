const { getHeroByIdAsync } = require("../../src/bases-pruebas/09-Promesas");

describe('Pruebas e 09-Promesas', () => {

    test('getHeroByIdAsync debe retornar un heroe ', ( done ) => {

        const id = 1;
        getHeroByIdAsync( id )
            .then( hero => {

                expect( hero ).toEqual( {
                    "id": 1,
                    "name": "Batman", 
                    "owner": "DC"
                } );

                done();
            });

    });
    test('getHeroByIdAsync debe obtener un error si heroe no existe', ( done ) => {

        const id = 100;
        getHeroByIdAsync( id )
            .then( hero => {
                expect( hero ).toBeFalsy();

                done();
            })
            .catch( error => {

                expect( error ).toBe( `No se pudo encontrar el heroe ${ id }` )

                done();
            });

    });
    
});
