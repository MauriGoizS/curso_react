

const saludar = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar2 = ( nombre ) => `Hola ${ nombre }`;
console.log( saludar('Goku') );
console.log( saludar2('Vegetta') );

const getUser = () => ({
    uid: 'ABC123',
    username: 'MauriGS',
});

const user = getUser();
console.log( user );

const getUsuarioActivo =  ( nombre ) =>  ({
        uid: 'ABC456',
        username: nombre,
});

const usuarioActivo = getUsuarioActivo('Mauricio');
console.log( usuarioActivo );