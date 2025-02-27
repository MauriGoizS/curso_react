import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './firstApp';
// import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';


ReactDOM.createRoot( document.getElementById('root') ).render( 
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        <FirstApp title="Hola, soy Goku"/>
    </React.StrictMode>
);