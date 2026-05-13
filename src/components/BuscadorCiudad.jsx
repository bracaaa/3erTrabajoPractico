import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function BuscadorCiudad(){
    const [busqueda, setBusqueda] = useState('') //Guarda una palabra
    const [listaCiudades, setListaCiudades] = useState([]) //Guarda una lista

    function obtenerCiudades(){
        //Llamada a la API
        axios.get ('https://nominatim.openstreetmap.org/search', {
            params: {q: busqueda, format: 'json', limit: 10,}
        }).then((respuesta) => {setListaCiudades(respuesta.data)})
    }

    return(
        <div>
            <h1>Busca una ciudad</h1>
            <input 
            type = "text" 
            placeholder="Ej. Buenos Aires..."
            value = {busqueda}
            onChange= {(e) => setBusqueda(e.target.value)} //Actualizar la variable busqueda con lo que escribe
            /> 
            <button onClick={obtenerCiudades}>Buscar</button>
        </div>
    )
}

