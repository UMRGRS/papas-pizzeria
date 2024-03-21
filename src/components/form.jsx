import React from 'react';
import './form.css'; // Importa el archivo CSS

function Login() {
  return (
        <div className="login-container">
        <form className="formulario">
        <h1 className='header1' >Ingresa tus datos</h1>
        <label class="label-t" for="my-input">
          <select>
            <option value="">Seleccionar rol</option>
            <option value="Mesero">Mesero</option>
            <option value="Cocinero">Cocinero</option>
            <option value="Cajero">Cajero</option>
          </select>
        </label>
        <label for="my-input">Numero de empleado</label>
        <input id='my-input' type='text'/>
        <button class="my-button" type="submit">Iniciar sesión</button>
      </form>
      </div>
  );
}

export default Login;