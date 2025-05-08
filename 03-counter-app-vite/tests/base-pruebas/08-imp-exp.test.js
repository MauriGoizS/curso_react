const { getHeroById, getHeroesByOwner } = require("../../src/bases-pruebas/08-imp-exp");

describe('Pruebas en el archivo 08-imp-exp', () => {
    
    test('getHeroeById debe de retornar un héroe por ID', () => {
    
        const id = 1;
        const hero = getHeroById( id );
        
        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )
    });

    test('getHeroeById debe de retornar undifined si no existe el ID', () => {
    
        const id = 100;
        const hero = getHeroById( id );
        
        expect( hero ).toBeFalsy();
        // expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )
    });

    test('getHeroeById debe de retornar heroes de DC', () => {
    
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( 
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );
        expect( heroes ).toEqual( heroes.filter( ( heroe ) => heroe.owner === owner ) );

        // expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )
    });

    test('getHeroeById debe de retornar heroes de Marvel', () => {
    
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( ( heroe ) => heroe.owner === owner ) );

        // expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )
    });

});
