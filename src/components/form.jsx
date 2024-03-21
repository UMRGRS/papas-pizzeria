import './form.css'; // Importa el archivo CSS
import Bot_imagenes from './boton_imagenes.jsx'

function Login() {
  return (
    <div className='body-container'>
      <Bot_imagenes/>
      <div className="login-container">
        <form className="formulario">
          <h1 className='header1'>Ingresa tus datos</h1>
          <label className="label-t" htmlFor="my-input">
            <select>
              <option value="">Seleccionar rol</option>
              <option value="Mesero">Mesero</option>
              <option value="Cocinero">Cocinero</option>
              <option value="Cajero">Cajero</option>
            </select>
          </label>
          <label htmlFor="my-input">Número de empleado</label>
          <input id='my-input' type='text' />
          <button className="my-button" type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;