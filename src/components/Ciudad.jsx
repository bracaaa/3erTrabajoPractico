import { Link } from 'react-router-dom'

export function Ciudad({ ciudad }) {
    return (
        <Link 
            to={`/detalle/${ciudad.lat}/${ciudad.lon}/${ciudad.display_name}`}
            className="ciudad-card"
        >
            <span>📍</span>
            <p>{ciudad.display_name}</p>
        </Link>
    )
}