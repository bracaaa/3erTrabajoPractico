import { useParams } from 'react-router-dom'
import { PronosticoTabla } from '../components/PronosticoTabla'

export function Detalles() {
    const { lat, lon, nombre } = useParams()

    return (
        <div>
            <h1>{nombre}</h1>
            <PronosticoTabla lat={lat} lon={lon} />
        </div>
    )
}