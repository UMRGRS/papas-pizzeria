import React, { useState } from 'react';
import './App.css';

const LoginForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [role, setRole] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Empleado ID:', employeeId);
    console.log('Rol:', role);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form  onSubmit={handleSubmit}>
        <h2>Ingresa tus datos</h2>

        <label>
        <p>Rol del empleado: </p>
          <select  value={role} onChange={(e) => setRole(e.target.value)} required> {"\n"}
            <option value="">Seleccionar rol</option>
            <option value="Mesero">Mesero</option>
            <option value="Cocinero">Cocinero</option>
            <option value="Cajero">Cajero</option>
          </select>
        </label>

        <label>
        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Numero de empleado: </p>
          <input 
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'10px' }}
            type="text" 
            value={employeeId} 
            onChange={(e) => setEmployeeId(e.target.value)} 
            required
          />
        </label>

        <button type="submit">Iniciar sesión</button>
      </form></div>
    </>
  );
};

export default LoginForm;
