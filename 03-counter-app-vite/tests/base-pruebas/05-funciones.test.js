const { getUser, getUsuarioActivo } = require("../../src/bases-pruebas/05-funciones");

describe("Pruebas en 05-funciones", () => {
    test("getUser debe retornar un objeto ", () => {

        const testUser = {
            uid: 'ABC123',
            username: 'MauriGS',
        };

        const user = getUser();

        expect( testUser ).toEqual( user );

    });


    test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Mauricio';

        const testUserActivo  = {
            
        };

        const user = getUsuarioActivo( name );

        expect( user ).toEqual({ 
            uid: 'ABC456',
            username: name, 
        });
        
    })

});
