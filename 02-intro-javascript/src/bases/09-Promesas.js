import { getHeroById } from "../bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {

//         const heroe = getHeroById(2);
//         resolve( heroe );
        // reject( 'No se pudo encontrar el heroe' );
//     }, 2000)

// });

// promesa.then( (heroe) => {
//     console.log('Heroe', heroe);
// })
// .catch( err => console.warn( err ) );

const getHeroByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
    
            const p1 = getHeroById( id );
            if ( p1 ) {
                resolve( p1 );
            }else {
                reject( 'No se pudo encontrar el heroe' );
            }

        }, 2000)
    
    });
}

getHeroByIdAsync(1) 
    .then( console.log )
    .catch ( console.warn );