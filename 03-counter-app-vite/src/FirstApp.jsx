import PropTypes from 'prop-types';

// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Mauricio',
// };

const getName = ( name ) => {
    return `Hola ${ name }`;
}

export const FirstApp = ( { title, subTitle } ) => {

    return (
        <>
            <h1>{ title }</h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ subTitle }</p>
            {/* <p>{ getName( 'Mauri' ) }</p> */}
        </>        
    )        
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
}