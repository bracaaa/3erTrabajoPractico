import { useNavigate } from 'react-router-dom'

export function Ciudad({ ciudad }) {
    const navigate = useNavigate()

    function irAlDetalle() {
        navigate(`/detalle/${ciudad.lat}/${ciudad.lon}/${ciudad.display_name}`)
    }

    return (
        <div onClick={irAlDetalle}>
            <p>{ciudad.display_name}</p>
        </div>
    )
}