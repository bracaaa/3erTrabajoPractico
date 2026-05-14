import {Ciudad} from './Ciudad'

export function ListaCiudades({ ciudades }) {
    if (ciudades.length === 0) {
        return <p className="sin-ciudades">No hay ciudades para mostrar</p>
    }

    return (
        <div className="lista-ciudades">
            {ciudades.map((ciudad) => (
                <Ciudad key={ciudad.place_id} ciudad={ciudad} />
            ))}
        </div>
    )
}