import { useState } from 'react'
import { BuscadorCiudad } from '../components/BuscadorCiudad'
import { ListaCiudades } from '../components/ListaCiudades'

export function Buscador() {
    const [listadoCiudades, setListadoCiudades] = useState([])

    return (
        <div className="pagina-buscador">
            <BuscadorCiudad ciudadesEncontradas={setListadoCiudades} />
            <ListaCiudades ciudades={listadoCiudades} />
        </div>
    )
}