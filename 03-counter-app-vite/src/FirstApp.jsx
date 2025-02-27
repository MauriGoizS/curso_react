
// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Mauricio',
// };

const getName = ( name ) => {
    return `Hola ${ name }`;
}

export const FirstApp = () => {

    return (
        <>
            <h1>Hola mundo</h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>Soy un subtitulo</p>
            <p>{ getName( 'Mauri' ) }</p>
        </>        
    )        
}