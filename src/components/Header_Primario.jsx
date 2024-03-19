import Logo from '../images/Logo.png'
import '../Styles.css'

function Header_Primario() {
  return (
    <div className='HeaderStyle'>
      <div className='logo_container'>
        <img className='logoStyle' src={Logo} />
        <div className='buttons-container'>
          <button className='HeaderButtons'>Inicio</button>
          <button className='HeaderButtons'>Ver Ordenes</button>
          <button className='HeaderButtons'>Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
}

export default Header_Primario;