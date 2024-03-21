import './form.css'
import imagen from './img/gato_pizza.jpg'

function bot_img() {
  return (
    <div>
      <div className="div-boton">
      <img src={imagen} height="200px" width="200 px" />
      <button className="my-button">
          Categoria
      </button>
    </div>
  </div>


    ) 
}

export default bot_img;