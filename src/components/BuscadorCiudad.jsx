import { useState } from 'react'
import axios from 'axios'

export function BuscadorCiudad({ciudadesEncontradas}){
    const [busqueda, setBusqueda] = useState('') //Guarda una palabra

    function obtenerCiudades(){
        //Llamada a la API
        axios.get ('https://nominatim.openstreetmap.org/search', {
            params: {
                q: busqueda, 
                format: 'json', 
                limit: 10,
            }
        }).then((respuesta) => 
            {ciudadesEncontradas(respuesta.data)})
    }

    return (
        <div>
            <h1 className="titulo">Pronóstico del Clima</h1>
            <div className="buscador-contenedor">
                <input
                    type="text"
                    placeholder="Buscar ciudad..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="buscador-input"
                />
                <button onClick={obtenerCiudades} className="buscador-boton">Buscar</button>
            </div>
        </div>
    )
}

