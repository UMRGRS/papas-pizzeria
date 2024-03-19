import Logo from '../images/Logo.png'
import '../Styles.css'

function Boton_mesa({buttonText}) {
  return (
    <div className='boton_mesa_div'>
      <img className='boton_img' src={Logo} />
      <button className='boton_boton_Mesa'>Mesa #{buttonText}</button>
    </div>
  );
}
export default Boton_mesa;