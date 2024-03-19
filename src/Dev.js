import Header_Primario from "./components/Header_Primario";
import Boton_mesa from "./components/Boton_mesa";


export default function Dev() {
    return (
      <dev>
        <Header_Primario></Header_Primario>
        <Boton_mesa buttonText={1}></Boton_mesa>
      </dev>
    )
  }