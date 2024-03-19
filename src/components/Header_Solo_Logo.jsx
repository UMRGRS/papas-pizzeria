import Logo from '../images/Logo.png'
import '../Styles.css'

function Header_Solo_Logo() {
  return (
    <div className='HeaderStyle'>
      <div className='logo_container'>
        <img className='logoStyle' src={Logo} />
      </div>
    </div>
  );
}

export default Header_Solo_Logo;