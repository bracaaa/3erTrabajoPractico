import { useState, useEffect } from 'react'
import axios from 'axios'

export function PronosticoTabla({ lat, lon }) {
    const [pronostico, setPronostico] = useState(null)

    function obtenerPronostico() {
        axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: lat,
                longitude: lon,
                daily: 'temperature_2m_max,temperature_2m_min,weather_code',
                timezone: 'auto',
            }
        }).then((respuesta) => {
            setPronostico(respuesta.data.daily)
        })
    }

    useEffect(() => {
        obtenerPronostico()
    }, [])

    if (!pronostico) return <p className="cargando">Cargando...</p>

    return (
        <div className="tabla-contenedor">
            <h2 className="tabla-titulo">Pronóstico de 7 días</h2>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Máxima</th>
                        <th>Mínima</th>
                    </tr>
                </thead>
                <tbody>
                    {pronostico.time.map((fecha, index) => (
                        <tr key={fecha} className="tabla-fila">
                            <td>{fecha}</td>
                            <td className="temp-max">{pronostico.temperature_2m_max[index]}°</td>
                            <td className="temp-min">{pronostico.temperature_2m_min[index]}°</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}