import Header_Cerrar_Sesion from "./components/Header_Cerrar_Sesion";
import Header_Primario from "./components/Header_Primario";
import Header_sin_ordenes from "./components/Header_sin_ordenes";
import Header_Solo_Logo from "./components/Header_Solo_Logo";
import Mapa_mesas from "./components/Mapa_mesas";


export default function Dev() {
    return (
      <dev>
        <Header_Primario></Header_Primario>
        <Header_Cerrar_Sesion></Header_Cerrar_Sesion>
        <Header_sin_ordenes></Header_sin_ordenes>
        <Header_Solo_Logo></Header_Solo_Logo>
        <Mapa_mesas></Mapa_mesas>
      </dev>
    )
  }