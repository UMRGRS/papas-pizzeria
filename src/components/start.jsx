import React from 'react';
import './App.css'; // Importa el archivo CSS

function Login() {
  return (
    <div className="login-container">
      <form className="formulario">
        <h2 className="h1" style={{padding: '20px'}}>Ingresa tus datos</h2>
        <label>
          <p>Rol del empleado:</p>
          <select>
            <option value="">Seleccionar rol</option>
            <option value="Mesero">Mesero</option>
            <option value="Cocinero">Cocinero</option>
            <option value="Cajero">Cajero</option>
          </select>
        </label>
        <label>
          <p>Numero de empleado:</p>
          <input />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;