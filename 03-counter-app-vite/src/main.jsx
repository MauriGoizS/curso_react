import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import { FirstApp } from './firstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './counterApp';



ReactDOM.createRoot( document.getElementById('root') ).render( 
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp title=' Hola ' /> */}
        <CounterApp value = { 0 }></CounterApp>
    </React.StrictMode>
);