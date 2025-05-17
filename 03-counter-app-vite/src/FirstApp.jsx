import PropTypes from 'prop-types';

// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Mauricio',
// };

// const getName = ( name ) => {
//     return `Hola ${ name }`;
// }

export const FirstApp = ( { title, subTitle, name }) => {

    return (
        <>
            <h1 data-testid="test-title"> { title } </h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
            {/* <p>{ getName( 'Mauri' ) }</p> */}
        </>        
    )        
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Mauricio Goiz',
    subTitle: 'No hay subtítulo',
    // title: 'No hay título',
}