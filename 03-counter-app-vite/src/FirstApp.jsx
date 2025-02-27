
// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Mauricio',
// };

const getName = ( name ) => {
    return `Hola ${ name }`;
}

export const FirstApp = ( { title, subTitle } ) => {

    // console.log( props );

    return (
        <>
            <h1>{ title }</h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ subTitle }</p>
            <p>{ getName( 'Mauri' ) }</p>
        </>        
    )        
}