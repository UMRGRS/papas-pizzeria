import Boton_mesa from './Boton_mesa';
import '../Styles.css'

function Mapa_mesas() {
  const num_Mesas = 20

  const data = Array.from(Array(num_Mesas).keys());

  return (
    <div className='boton-mesa-grid-container'>
      {data.map((item, index) => (
            <Boton_mesa key={index} buttonText={item+1} />
          )
        )
      }
    </div>
  );
}

export default Mapa_mesas;