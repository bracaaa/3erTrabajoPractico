import { useState } from 'react'
import {BuscadorCiudad} from '../components/BuscadorCiudad'
import {ListaCiudades} from '../components/ListaCiudades'

export function Buscador(){
    const [listadoCiudades, setListadoCiudades] = useState([]) //Guarda una lista

    return(
        <div>
            <BuscadorCiudad ciudadesEncontradas={setListadoCiudades}/>
            <ListaCiudades ciudades={listadoCiudades}/>
        </div>
    )
}