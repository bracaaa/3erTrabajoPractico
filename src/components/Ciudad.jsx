import { Link } from 'react-router-dom'

export function Ciudad({ ciudad }) {
    return (
        <div>
            <Link to={`/detalle/${ciudad.lat}/${ciudad.lon}/${ciudad.display_name}`}>
                {ciudad.display_name}
            </Link>
        </div>
    )
}