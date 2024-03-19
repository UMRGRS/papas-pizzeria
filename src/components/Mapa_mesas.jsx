import Boton_mesa from './Boton_mesa';
import '../Styles.css'

function Mapa_mesas({ buttonTexts }) {
  return (
    <div className='boton-mesa-grid-container'>
      {buttonTexts.map((buttonText, index) => (
        <Boton_mesa key={buttonText} buttonText={buttonText} />
      ))}
    </div>
  );
}

export default Mapa_mesas;