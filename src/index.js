import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header_Primario from './components/Header_Primario';
import Header_Cerrar_Sesion from './components/Header_Cerrar_Sesion';
import Header_sin_ordenes from './components/Header_sin_ordenes';
import Header_Solo_Logo from './components/Header_Solo_Logo';
import Boton_mesa from './components/Boton_mesa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header_Primario></Header_Primario>
    <Header_Cerrar_Sesion></Header_Cerrar_Sesion>
    <Header_sin_ordenes></Header_sin_ordenes>
    <Header_Solo_Logo></Header_Solo_Logo>
    <Boton_mesa buttonText={1}></Boton_mesa>
  </React.StrictMode>
);

reportWebVitals();
