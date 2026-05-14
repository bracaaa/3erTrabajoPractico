import { useState, useEffect } from 'react'
import axios from 'axios'

export function PronosticoTabla({ lat, lon }) {
    const [pronostico, setPronostico] = useState(null) // Guarda el pronóstico

    function obtenerPronostico() {
        axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: lat,
                longitude: lon,
                daily: 'temperature_2m_max,temperature_2m_min,weather_code',
                timezone: 'auto'
            }
        }).then((respuesta) => {
            setPronostico(respuesta.data.daily)
        })
    }

    useEffect(() => {
        obtenerPronostico() // Llama a la función cuando carga la página
    }, [])

    if (!pronostico) return <p>Cargando...</p>

    return (
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Máxima</th>
                    <th>Mínima</th>
                </tr>
            </thead>
            <tbody>
                {pronostico.time.map((fecha, index) => (
                    <tr key={fecha}>
                        <td>{fecha}</td>
                        <td>{pronostico.temperature_2m_max[index]}°C</td>
                        <td>{pronostico.temperature_2m_min[index]}°C</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}