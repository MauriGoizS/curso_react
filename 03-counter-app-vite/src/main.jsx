import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './firstApp';
// import { HelloWorldApp } from './HelloWorldApp';


ReactDOM.createRoot( document.getElementById('root') ).render( 
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        <FirstApp/>
    </React.StrictMode>
);