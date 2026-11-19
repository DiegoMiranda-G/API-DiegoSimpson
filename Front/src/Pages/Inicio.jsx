import useBuscarPersonaje from '../Hook/useBuscarPersonaje'
import Buscador from '../Componentes/Buscador'
import Cargando from '../Componentes/Cargando'
import Personaje from '../Orquestadores/Personaje'
import '../Style/Personajes.css'

export default function Inicio() {

    const { nombre, setNombre, personaje, buscar, cargando } = useBuscarPersonaje()

    return (
        <div>

            {cargando && <Cargando />}

            <h1>Personajes de Los Simpson</h1>

            <Buscador
                nombre={nombre}
                setNombre={setNombre}
                buscar={buscar}
            />

            <Personaje personaje={personaje} />

        </div>
    )

}