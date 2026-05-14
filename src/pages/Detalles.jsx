import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PronosticoTabla } from '../components/PronosticoTabla'

export function Detalles() {
    const { lat, lon, nombre } = useParams()

    return (
        <div className="pagina-detalles">
            <Link to="/" className="btn-volver">← Volver</Link>
            <h1 className="titulo-ciudad">{nombre}</h1>
            <p className="fecha-hoy">{new Date().toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <PronosticoTabla lat={lat} lon={lon} />
        </div>
    )
}